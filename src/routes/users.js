/* eslint-disable linebreak-style */
const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  res.send('Hello world');
});

module.exports = routes;
