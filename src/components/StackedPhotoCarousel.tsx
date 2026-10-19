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

// Visual configuration for each slot in the stack
const STACK_CONFIGS = [
  // Slot 0: Top / Front card
  {
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    zIndex: 30,
    opacity: 1,
    shadow:
      '0 20px 35px -10px rgba(26, 90, 129, 0.32), 0 10px 18px -6px rgba(0, 0, 0, 0.16)',
    filter: 'brightness(100%)',
  },
  // Slot 1: Second card behind
  {
    scale: 0.94,
    y: -14,
    x: 8,
    rotate: 3.5,
    zIndex: 20,
    opacity: 0.92,
    shadow: '0 14px 26px -8px rgba(0, 0, 0, 0.2)',
    filter: 'brightness(96%)',
  },
  // Slot 2: Third card behind
  {
    scale: 0.88,
    y: -26,
    x: -8,
    rotate: -3.5,
    zIndex: 10,
    opacity: 0.78,
    shadow: '0 10px 20px -8px rgba(0, 0, 0, 0.16)',
    filter: 'brightness(92%)',
  },
  // Slot 3: Deep standby card in back
  {
    scale: 0.82,
    y: -36,
    x: 0,
    rotate: 0,
    zIndex: 5,
    opacity: 0,
    shadow: 'none',
    filter: 'brightness(88%)',
  },
]

// Silky smooth easing curve for mobile deck transitions
const FLUID_EASE = [0.22, 1, 0.36, 1] as const
const TRANSITION_DURATION = 0.44

export const StackedPhotoCarousel = forwardRef<StackedPhotoCarouselRef, StackedPhotoCarouselProps>(
  ({ items, currentIndex, onIndexChange, className = '' }, ref) => {
    // Exiting card that sweeps away when going to Next
    const [exitingCard, setExitingCard] = useState<{
      item: StackedPhotoItem
      direction: number
    } | null>(null)

    // Incoming card that sweeps in when going to Prev
    const [incomingCard, setIncomingCard] = useState<{
      item: StackedPhotoItem
      direction: number
    } | null>(null)

    const [isBusy, setIsBusy] = useState<boolean>(false)

    // Motion values for tactile drag interaction on front card
    const dragX = useMotionValue(0)
    const dragRotate = useTransform(dragX, [-200, 0, 200], [-12, 0, 12])

    const total = items.length
    const busyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Trigger subtle haptic feedback if supported on mobile devices
    const triggerHaptic = useCallback(() => {
      try {
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
          navigator.vibrate(10)
        }
      } catch {
        // Fallback safely
      }
    }, [])

    // Smooth forward transition: front card glides away, next card rises to front
    const triggerNext = useCallback(
      (direction = 1) => {
        if (isBusy || total <= 1) return
        setIsBusy(true)
        triggerHaptic()

        dragX.set(0)

        const currentItem = items[currentIndex]
        const nextIndex = (currentIndex + 1) % total

        // Set exiting card to smoothly fly off and fade out
        setExitingCard({
          item: currentItem,
          direction,
        })

        // Advance index so background cards smoothly float forward simultaneously
        onIndexChange(nextIndex)

        if (busyTimeoutRef.current) clearTimeout(busyTimeoutRef.current)
        busyTimeoutRef.current = setTimeout(() => {
          setExitingCard(null)
          setIsBusy(false)
        }, Math.round(TRANSITION_DURATION * 1000 + 40))
      },
      [isBusy, total, currentIndex, items, onIndexChange, dragX, triggerHaptic]
    )

    // Smooth backward transition: previous card glides in from the side
    const triggerPrev = useCallback(() => {
      if (isBusy || total <= 1) return
      setIsBusy(true)
      triggerHaptic()

      dragX.set(0)

      const prevIndex = (currentIndex - 1 + total) % total
      const prevItem = items[prevIndex]

      setIncomingCard({
        item: prevItem,
        direction: -1,
      })

      onIndexChange(prevIndex)

      if (busyTimeoutRef.current) clearTimeout(busyTimeoutRef.current)
      busyTimeoutRef.current = setTimeout(() => {
        setIncomingCard(null)
        setIsBusy(false)
      }, Math.round(TRANSITION_DURATION * 1000 + 40))
    }, [isBusy, total, currentIndex, items, onIndexChange, dragX, triggerHaptic])

    useImperativeHandle(
      ref,
      () => ({
        triggerNext,
        triggerPrev,
      }),
      [triggerNext, triggerPrev]
    )

    // Gesture swipe handler on front card
    const handleDragEnd = (
      _: MouseEvent | TouchEvent | PointerEvent,
      info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
    ) => {
      const swipeThreshold = 50
      const velocityThreshold = 300

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
                  touchAction: 'pan-y', // Permits vertical page scrolling while capturing horizontal swipes
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
                  duration: TRANSITION_DURATION,
                  ease: FLUID_EASE,
                }}
                drag={isTopCard ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
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
          {/* Smooth Exiting Card: Gracefully sweeps out and fades to 0 */}
          {/* ======================================================== */}
          {exitingCard && (
            <motion.div
              key={`exiting-${exitingCard.item.id}`}
              className="absolute inset-x-0 mx-auto w-full h-[470px] rounded-[28px] overflow-hidden border-2 border-[#48a6a7] bg-[#ddf3ee] pointer-events-none"
              initial={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                zIndex: 35,
                opacity: 1,
              }}
              animate={{
                x: exitingCard.direction * 310,
                y: -10,
                rotate: exitingCard.direction * 11,
                scale: 0.94,
                zIndex: 35,
                opacity: 0,
              }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: FLUID_EASE,
              }}
              style={{
                boxShadow:
                  '0 20px 35px -10px rgba(26, 90, 129, 0.32), 0 10px 18px -6px rgba(0, 0, 0, 0.16)',
              }}
            >
              <img
                src={exitingCard.item.image}
                alt={exitingCard.item.title}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none select-none"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20" />

              {exitingCard.item.badge && (
                <div className="absolute top-5 right-5 bg-[#48a6a7]/90 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md z-10">
                  {exitingCard.item.badge}
                </div>
              )}

              <div
                dir="rtl"
                className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#0e3b52]/95 via-[#1a5a81]/85 via-45% to-transparent flex flex-col justify-end p-5 sm:p-6 text-right"
              >
                <h3 className="text-lg sm:text-[21px] font-bold text-white drop-shadow-md mb-1.5">
                  {exitingCard.item.title}
                </h3>
                {exitingCard.item.description && (
                  <p className="text-xs sm:text-[13px] font-medium text-white/90 leading-relaxed drop-shadow-sm line-clamp-3">
                    {exitingCard.item.description}
                  </p>
                )}
              </div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* Smooth Incoming Card: Gracefully sweeps in when going Prev */}
          {/* ======================================================== */}
          {incomingCard && (
            <motion.div
              key={`incoming-${incomingCard.item.id}`}
              className="absolute inset-x-0 mx-auto w-full h-[470px] rounded-[28px] overflow-hidden border-2 border-[#48a6a7] bg-[#ddf3ee] pointer-events-none"
              initial={{
                x: -310,
                y: -10,
                rotate: -11,
                scale: 0.94,
                zIndex: 35,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                zIndex: 35,
                opacity: 1,
              }}
              transition={{
                duration: TRANSITION_DURATION,
                ease: FLUID_EASE,
              }}
              style={{
                boxShadow:
                  '0 20px 35px -10px rgba(26, 90, 129, 0.32), 0 10px 18px -6px rgba(0, 0, 0, 0.16)',
              }}
            >
              <img
                src={incomingCard.item.image}
                alt={incomingCard.item.title}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none select-none"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20" />

              {incomingCard.item.badge && (
                <div className="absolute top-5 right-5 bg-[#48a6a7]/90 backdrop-blur-md border border-white/60 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md z-10">
                  {incomingCard.item.badge}
                </div>
              )}

              <div
                dir="rtl"
                className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#0e3b52]/95 via-[#1a5a81]/85 via-45% to-transparent flex flex-col justify-end p-5 sm:p-6 text-right"
              >
                <h3 className="text-lg sm:text-[21px] font-bold text-white drop-shadow-md mb-1.5">
                  {incomingCard.item.title}
                </h3>
                {incomingCard.item.description && (
                  <p className="text-xs sm:text-[13px] font-medium text-white/90 leading-relaxed drop-shadow-sm line-clamp-3">
                    {incomingCard.item.description}
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
