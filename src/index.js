/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const express = require('express');

const userRoutes = require('./routes/users');

const hargaRoutes = require('./routes/harga');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/harga', hargaRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server berhasil di runnig di port 3000');
});
