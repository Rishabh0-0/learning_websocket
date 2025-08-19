const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('New Client connected');

  ws.on('message', (message) => {
    console.log('Received:', message.toString());
    ws.send(`Echo: ${message}`);
  });

  ws.close('close', () => {
    console.log('Client disconnected');
  });

  ws.send('Welcome to the echo sever!');
});
