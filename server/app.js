const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
