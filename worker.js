export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    if (request.method === 'OPTIONS') return new Response(null, { headers });
    if (path === '/attack') {
      const body = await request.json();
      return new Response(JSON.stringify({ action: 'attack', damage: Math.floor(Math.random() * 15) + 1, target: body.target }), { headers });
    }
    if (path === '/health') {
      return new Response(JSON.stringify({ status: 'ok', agent: 'llunaris-combat', version: '1.0.0' }), { headers });
    }
    return new Response(JSON.stringify({ agent: 'llunaris-combat', endpoints: ['/attack', '/health'] }), { headers });
  }
};
