const getAllHarga = (req, res) => {
    res.json({
        message: 'GET harga success'
    })
}

const createNewHarga = (req, res) => {
    res.json({
        message: 'POST harga success'
    })
}

module.exports = {
    getAllHarga,
    createNewHarga
}
