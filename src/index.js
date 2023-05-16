const express = require('express');

const hargaRoutes = require('./routes/harga')

const app = express();

app.use("/harga", hargaRoutes);

app.listen(3000, () => {
    console.log('Server berhasil di runnig di port 3000');
})