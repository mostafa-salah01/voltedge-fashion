const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from root directory
app.use(express.static(path.join(__dirname, '.'), {
  extensions: ['html', 'htm']
}));

// Route fallback for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`VoltEdge fashion server listening on http://0.0.0.0:${PORT}`);
});
