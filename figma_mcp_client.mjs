import fs from 'fs';

async function main() {
  const url = 'http://127.0.0.1:3845/mcp';

  // 1. Initialize
  const initRes = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream'
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        clientInfo: { name: 'antigravity-client', version: '1.0.0' },
        capabilities: {}
      }
    })
  });

  const sessionId = initRes.headers.get('mcp-session-id');
  const initText = await initRes.text();
  console.log('Init status:', initRes.status, 'Session ID:', sessionId);

  // 2. Initialized notification
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream',
      ...(sessionId ? { 'mcp-session-id': sessionId } : {})
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'notifications/initialized',
      params: {}
    })
  });

  // 3. List tools
  const toolsRes = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream',
      ...(sessionId ? { 'mcp-session-id': sessionId } : {})
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/list',
      params: {}
    })
  });
  const toolsText = await toolsRes.text();
  console.log('Tools response length:', toolsText.length);

  // 4. Call get_design_context for 933:1649
  console.log('Calling get_design_context for 933:1649...');
  const callRes = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream',
      ...(sessionId ? { 'mcp-session-id': sessionId } : {})
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 3,
      method: 'tools/call',
      params: {
        name: 'get_design_context',
        arguments: {
          nodeId: '933:1649',
          clientFrameworks: 'nextjs,react',
          clientLanguages: 'typescript,css'
        }
      }
    })
  });

  const callText = await callRes.text();
  console.log('Call status:', callRes.status, 'Length:', callText.length);
  fs.writeFileSync('scratch_figma_response.txt', callText, 'utf8');
  console.log('Saved to scratch_figma_response.txt');
}

main().catch(console.error);
