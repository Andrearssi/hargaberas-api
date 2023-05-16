const hargaModel = require('../models/harga-beras');

async function getAllHarga(req, res) {
  try {
    const [data] = await hargaModel.getAllHarga();
    return res.json({
      message: 'GET harga success',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

async function createNewHarga(req, res) {
  const { body } = req;

  if (!body.provinsi || !body.harga) {
    return res.status(400).json({
      message: 'Anda memberikan data yang salah',
      data: null,
    });
  }

  try {
    await hargaModel.createNewHarga(body);
    return res.status(201).json({
      message: 'Create harga success',
      data: body,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

async function updateHarga(req, res) {
  const { id } = req.params;
  const { body } = req;
  try {
    await hargaModel.updateHarga(body, id);
    res.json({
      message: 'Update harga success',
      data: {
        id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

module.exports = {
  getAllHarga,
  createNewHarga,
  updateHarga,
};
