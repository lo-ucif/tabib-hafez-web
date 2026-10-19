import { useState, forwardRef, useImperativeHandle, useRef, useCallback } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export interface StackedPhotoItem {
  id: string | number
  title: string
  description?: string
  image: string
  badge?: string
}

export interface StackedPhotoCarouselRef {
  triggerNext: (direction?: number) => void
  triggerPrev: () => void
}

export interface StackedPhotoCarouselProps {
  items: StackedPhotoItem[]
  currentIndex: number
  onIndexChange: (newIndex: number) => void
  className?: string
}

interface AnimatingCardState {
  item: StackedPhotoItem
  direction: number
  type: 'sendToBack' | 'bringToFront'
}

// Layered stack visual depth configurations
const STACK_CONFIGS = [
  // Top / Front card (offset 0)
  {
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    zIndex: 30,
    opacity: 1,
    shadow:
      '0 20px 35px -10px rgba(26, 90, 129, 0.35), 0 10px 18px -6px rgba(0, 0, 0, 0.16)',
    filter: 'brightness(100%)',
  },
  // Second card behind (offset 1)
  {
    scale: 0.94,
    y: -14,
    x: 8,
    rotate: 3.5,
    zIndex: 20,
    opacity: 0.92,
    shadow: '0 14px 26px -8px rgba(0, 0, 0, 0.22)',
    filter: 'brightness(96%)',
  },
  // Third card behind (offset 2)
  {
    scale: 0.88,
    y: -26,
    x: -8,
    rotate: -3.5,
    zIndex: 10,
    opacity: 0.78,
    shadow: '0 10px 20px -8px rgba(0, 0, 0, 0.18)',
    filter: 'brightness(92%)',
  },
  // Hidden standby card in back (offset >= 3)
  {
    scale: 0.82,
    y: -36,
    x: 0,
    rotate: 1.5,
    zIndex: 5,
    opacity: 0,
    shadow: 'none',
    filter: 'brightness(88%)',
  },
]

export const StackedPhotoCarousel = forwardRef<StackedPhotoCarouselRef, StackedPhotoCarouselProps>(
  ({ items, currentIndex, onIndexChange, className = '' }, ref) => {
    const [animatingCard, setAnimatingCard] = useState<AnimatingCardState | null>(null)
    const [isBusy, setIsBusy] = useState<boolean>(false)

    // Motion values for tactile drag interaction
    const dragX = useMotionValue(0)
    const dragRotate = useTransform(dragX, [-200, 0, 200], [-14, 0, 14])

    const total = items.length
    const busyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Trigger haptic feedback if supported on mobile devices
    const triggerHaptic = useCallback(() => {
      try {
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
          navigator.vibrate(12)
        }
      } catch {
        // Ignore fallback
      }
    }, [])

    // Smooth curved send-to-back animation
    const triggerNext = useCallback(
      (direction = 1) => {
        if (isBusy || total <= 1) return
        setIsBusy(true)
        triggerHaptic()

        // Reset drag motion value
        dragX.set(0)

        const currentItem = items[currentIndex]
        const nextIndex = (currentIndex + 1) % total

        setAnimatingCard({
          item: currentItem,
          direction,
          type: 'sendToBack',
        })

        // Advance index so new top card begins transitioning forward
        onIndexChange(nextIndex)

        // Safety fallback timeout to prevent deadlock
        if (busyTimeoutRef.current) clearTimeout(busyTimeoutRef.current)
        busyTimeoutRef.current = setTimeout(() => {
          setAnimatingCard(null)
          setIsBusy(false)
        }, 650)
      },
      [isBusy, total, currentIndex, items, onIndexChange, dragX, triggerHaptic]
    )

    // Bring previous photo from back to front
    const triggerPrev = useCallback(() => {
      if (isBusy || total <= 1) return
      setIsBusy(true)
      triggerHaptic()

      dragX.set(0)

      const prevIndex = (currentIndex - 1 + total) % total
      const prevItem = items[prevIndex]

      setAnimatingCard({
        item: prevItem,
        direction: -1,
        type: 'bringToFront',
      })

      onIndexChange(prevIndex)

      if (busyTimeoutRef.current) clearTimeout(busyTimeoutRef.current)
      busyTimeoutRef.current = setTimeout(() => {
        setAnimatingCard(null)
        setIsBusy(false)
      }, 650)
    }, [isBusy, total, currentIndex, items, onIndexChange, dragX, triggerHaptic])

    useImperativeHandle(
      ref,
      () => ({
        triggerNext,
        triggerPrev,
      }),
      [triggerNext, triggerPrev]
    )

    // Handle end of gesture or tap
    const handleDragEnd = (
      _: MouseEvent | TouchEvent | PointerEvent,
      info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
    ) => {
      const swipeThreshold = 55
      const velocityThreshold = 350

      if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
        triggerNext(1) // Swiped right
      } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
        triggerNext(-1) // Swiped left
      }
    }

    const handleCardTap = () => {
      if (!isBusy) {
        triggerNext(1)
      }
    }

    const handleAnimationEnd = () => {
      if (busyTimeoutRef.current) clearTimeout(busyTimeoutRef.current)
      setAnimatingCard(null)
      setIsBusy(false)
    }

    // Visible stack slots: offset 0 (front), 1 (second), 2 (third)
    const visibleCards = [0, 1, 2].map((offset) => {
      const itemIndex = (currentIndex + offset) % total
      return {
        item: items[itemIndex],
        offset,
        config: STACK_CONFIGS[offset] || STACK_CONFIGS[3],
      }
    })

    return (
      <div
        className={`relative w-full max-w-[340px] sm:max-w-[370px] md:max-w-[390px] mx-auto select-none pt-8 pb-4 ${className}`}
        style={{ height: '535px' }}
      >
        {/* Layered Cards Stack */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Render visible cards from back (offset 2) to front (offset 0) */}
          {[...visibleCards].reverse().map(({ item, offset, config }) => {
            const isTopCard = offset === 0

            return (
              <motion.div
                key={item.id}
                className="absolute inset-x-0 mx-auto w-full h-[470px] rounded-[28px] overflow-hidden border-2 border-[#48a6a7] bg-[#ddf3ee] cursor-grab active:cursor-grabbing"
                style={{
                  boxShadow: config.shadow,
                  filter: config.filter,
                  touchAction: 'pan-y', // Permits vertical scrolling while catching horizontal swipes
                  ...(isTopCard ? { x: dragX, rotate: dragRotate } : {}),
                }}
                animate={{
                  scale: config.scale,
                  y: config.y,
                  x: isTopCard ? 0 : config.x,
                  rotate: isTopCard ? 0 : config.rotate,
                  zIndex: config.zIndex,
                  opacity: config.opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                  mass: 0.85,
                }}
                drag={isTopCard ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.65}
                onDragEnd={isTopCard ? handleDragEnd : undefined}
                onClick={isTopCard ? handleCardTap : undefined}
                whileTap={isTopCard && !isBusy ? { scale: 0.985 } : undefined}
              >
                {/* Photo Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />

                {/* Subtle top gloss sheen for tangible photo feel */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20" />

                {/* Category Badge (Top-Right in RTL) */}
                {item.badge && (
                  <div className="absolute top-5 right-5 bg-[#48a6a7]/90 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md z-10">
                    {item.badge}
                  </div>
                )}

                {/* Interactive Hint & Counter (Top-Left) on front card */}
                {isTopCard && (
                  <div className="absolute top-5 left-5 bg-black/50 backdrop-blur-md border border-white/35 text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md z-10">
                    <motion.svg
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                      className="w-3.5 h-3.5 text-[#e2a72b]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </motion.svg>
                    <span>انقر أو اسحب للتقليب</span>
                  </div>
                )}

                {/* Frosted Teal Gradient Info Overlay (Bottom) with RTL support */}
                <div
                  dir="rtl"
                  className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#0e3b52]/95 via-[#1a5a81]/85 via-45% to-transparent flex flex-col justify-end p-5 sm:p-6 text-right"
                >
                  <h3 className="text-lg sm:text-[21px] font-bold text-white drop-shadow-md mb-1.5">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs sm:text-[13px] font-medium text-white/90 leading-relaxed drop-shadow-sm line-clamp-3">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}

          {/* ======================================================== */}
          {/* Smooth Send-to-Back Outward Curved Animated Card */}
          {/* ======================================================== */}
          {animatingCard && animatingCard.type === 'sendToBack' && (
            <motion.div
              key={`animating-exit-${animatingCard.item.id}`}
              className="absolute inset-x-0 mx-auto w-full h-[470px] rounded-[28px] overflow-hidden border-2 border-[#48a6a7] bg-[#ddf3ee] pointer-events-none"
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                zIndex: 45,
                opacity: 1,
              }}
              animate={{
                // Curved diagonal flight path swinging out, then tucking behind the stack
                x: [0, 200 * animatingCard.direction, 100 * animatingCard.direction, -6],
                y: [0, -30, -16, -26],
                rotate: [0, 13 * animatingCard.direction, 4 * animatingCard.direction, -3.5],
                scale: [1, 1.02, 0.94, 0.88],
                zIndex: [45, 45, 8, 8],
                opacity: [1, 1, 0.92, 0.75],
              }}
              transition={{
                duration: 0.52,
                times: [0, 0.38, 0.72, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={handleAnimationEnd}
              style={{
                boxShadow:
                  '0 24px 45px -10px rgba(26, 90, 129, 0.35), 0 12px 22px -6px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={animatingCard.item.image}
                alt={animatingCard.item.title}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none select-none"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20" />

              {animatingCard.item.badge && (
                <div className="absolute top-5 right-5 bg-[#48a6a7]/90 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md z-10">
                  {animatingCard.item.badge}
                </div>
              )}

              <div
                dir="rtl"
                className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#0e3b52]/95 via-[#1a5a81]/85 via-45% to-transparent flex flex-col justify-end p-5 sm:p-6 text-right"
              >
                <div className="flex items-center justify-between mb-1.5 gap-2">
                  <h3 className="text-lg sm:text-[21px] font-bold text-white drop-shadow-md">
                    {animatingCard.item.title}
                  </h3>
                </div>
                {animatingCard.item.description && (
                  <p className="text-xs sm:text-[13px] font-medium text-white/90 leading-relaxed drop-shadow-sm line-clamp-3">
                    {animatingCard.item.description}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* Smooth Bring-to-Front Curved Animated Card (for Prev action) */}
          {/* ======================================================== */}
          {animatingCard && animatingCard.type === 'bringToFront' && (
            <motion.div
              key={`animating-enter-${animatingCard.item.id}`}
              className="absolute inset-x-0 mx-auto w-full h-[470px] rounded-[28px] overflow-hidden border-2 border-[#48a6a7] bg-[#ddf3ee] pointer-events-none"
              initial={{
                x: -190,
                y: -28,
                rotate: -12,
                scale: 0.88,
                zIndex: 8,
                opacity: 0.7,
              }}
              animate={{
                x: [-190, -80, 0],
                y: [-28, -12, 0],
                rotate: [-12, -3, 0],
                scale: [0.88, 1.02, 1],
                zIndex: [8, 45, 45],
                opacity: [0.75, 1, 1],
              }}
              transition={{
                duration: 0.52,
                times: [0, 0.45, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={handleAnimationEnd}
              style={{
                boxShadow:
                  '0 24px 45px -10px rgba(26, 90, 129, 0.35), 0 12px 22px -6px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={animatingCard.item.image}
                alt={animatingCard.item.title}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none select-none"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20" />

              {animatingCard.item.badge && (
                <div className="absolute top-5 right-5 bg-[#48a6a7]/90 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md z-10">
                  {animatingCard.item.badge}
                </div>
              )}

              <div
                dir="rtl"
                className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#0e3b52]/95 via-[#1a5a81]/85 via-45% to-transparent flex flex-col justify-end p-5 sm:p-6 text-right"
              >
                <div className="flex items-center justify-between mb-1.5 gap-2">
                  <h3 className="text-lg sm:text-[21px] font-bold text-white drop-shadow-md">
                    {animatingCard.item.title}
                  </h3>
                </div>
                {animatingCard.item.description && (
                  <p className="text-xs sm:text-[13px] font-medium text-white/90 leading-relaxed drop-shadow-sm line-clamp-3">
                    {animatingCard.item.description}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    )
  }
)

StackedPhotoCarousel.displayName = 'StackedPhotoCarousel'
