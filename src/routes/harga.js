const express = require('express');

const hargaController = require('../controller/harga')

const router = express.Router();

router.get('/', hargaController.getAllHarga)

router.post('/', hargaController.createNewHarga)

module.exports = router;