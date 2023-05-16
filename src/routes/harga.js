const express = require('express');

const routes = express.Router();

const {
  getAllHarga,
  createNewHarga,
  updateHarga,
} = require('../controller/harga');

routes.get('/', getAllHarga);

routes.post('/', createNewHarga);

routes.patch('/:id', updateHarga);

module.exports = routes;
