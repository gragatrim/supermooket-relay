const express = require('express');
const Gun = require('gun');
const app = express();
const port = process.env.PORT || 8765;
app.use(Gun.serve);
app.get('/', (req, res) => res.send('supermooket relay ok'));
const server = app.listen(port, () => console.log(`Relay on port ${port}`));
Gun({ web: server });
