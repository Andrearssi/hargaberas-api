const hargaModel = require('../models/harga-beras');

const getAllHarga = async (req, res) => {
    try {
        const [data] = await hargaModel.getAllHarga();
        res.json({
            message: 'GET harga success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
    
}

const createNewHarga = async (req, res) => {
    const {body} = req;
    try {
        await hargaModel.createNewHarga(body);
        res.json({
            message: 'Create harga success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const updateHarga = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        await hargaModel.updateHarga(body, id);
        res.json({
            message: 'Update harga success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllHarga,
    createNewHarga,
    updateHarga
}
