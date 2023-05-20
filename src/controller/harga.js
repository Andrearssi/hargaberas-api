/* eslint-disable linebreak-style */
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
      message: 'Data tidak boleh kosong',
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

  if (!body.provinsi || !body.harga) {
    return res.status(400).json({
      message: 'Data tidak boleh kosong',
    });
  }
  try {
    const [rows] = await hargaModel.getHargaById(id);
    if (rows.length > 0) {
      await hargaModel.updateHarga(body, id);
      return res.json({
        message: 'Update harga success',
        data: {
          id,
          ...body,
        },
      });
    }
    return res.status(404).json({
      message: 'Failed to update. ID was not found',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

async function deleteHarga(req, res) {
  const { id } = req.params;

  try {
    const [rows] = await hargaModel.getHargaById(id);
    if (rows.length > 0) {
      await hargaModel.deleteHarga(id);
      return res.json({
        message: 'Delete harga success',
        data: rows,
      });
    }
    return res.status(404).json({
      message: 'Failed to delete. ID was not found',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

module.exports = {
  getAllHarga,
  createNewHarga,
  updateHarga,
  deleteHarga,
};
