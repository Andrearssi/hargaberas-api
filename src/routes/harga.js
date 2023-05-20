/* eslint-disable linebreak-style */
const express = require('express');

const routes = express.Router();

const {
  getAllHarga,
  createNewHarga,
  updateHarga,
  deleteHarga,
} = require('../controller/harga');

routes.get('/', getAllHarga);

routes.post('/', createNewHarga);

routes.patch('/:id', updateHarga);

routes.delete('/:id', deleteHarga);

module.exports = routes;
