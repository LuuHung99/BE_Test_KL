const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const setRoutes = require('./setRoutes');
const config = require('./config');

const app = express();
app.set('views', './views');
app.set('view engine', 'pug');
app.set('secretKey', config.jwtSecret);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

setRoutes(app, './api', true, 'api');
setRoutes(app, './controllers', false);

// connect to Mongodb
// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Mongodb is connected successfully');

  // To generate Admin account
  // const genAdmin = require('./utils/generateAdmin');
  // genAdmin()
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(`Mongodb connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongodb connection is disconnected');
});

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.listen(config.port, () => {
  console.log(`App running on port ${config.port}`);
});
