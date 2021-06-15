const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * ----- ----- ----- -----
 * Cart Information Endpoints
 * ----- ----- ----- -----
 */
require('./app/routes/cart')(app);

/**
 * ----- ----- ----- -----
 * Health Check Endpoints
 * ----- ----- ----- -----
 */
app.get('/status', (request, response) => {
  response.json({
    status: '00000',
    message: 'Healthy',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Initialized on :${port}`);
});
