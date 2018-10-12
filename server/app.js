const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');

const port = 3000;
const app = express();

let balance = "12,202,300.02"

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/balance', (req, res) =>
  { console.log('hello!')
  res.send({
    balance: balance
  })
  }
)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
