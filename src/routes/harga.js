const express = require('express');

const routes = express.Router();

const {
    getAllHarga,
    createNewHarga
} = require('../controller/harga')

routes.get('/', getAllHarga)

routes.post('/', createNewHarga)

module.exports = routes;