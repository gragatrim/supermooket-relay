const express = require('express');
const Gun = require('gun');
const app = express();
const port = process.env.PORT || 8765;

// CORS for cross-origin WebSocket/fetch from milkywayidle.com
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(Gun.serve);
app.get('/', (req, res) => res.send('supermooket relay ok'));
const server = app.listen(port, () => console.log(`Relay on port ${port}`));
Gun({ web: server });
