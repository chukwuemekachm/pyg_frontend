const express = require('express');
const path = require('path');
const compression = require('compression');
const zlib = require('zlib');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(compression({ level: zlib.Z_BEST_SPEED }));
app.use(express.static('public'));

app.all('*', (_, res) => res.status(200).sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT);

module.exports = app;
