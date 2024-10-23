// server.js
const express = require('express');
const next = require('next');

// Set environment to development or production
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Start Next.js server and handle requests
app.prepare().then(() => {
  const server = express();

  // You can define any custom API routes here
  server.get('/api/hello', (req, res) => {
    return res.json({ message: 'Hello from Node.js server!' });
  });

  // Serve all Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
