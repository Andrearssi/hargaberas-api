/* eslint-disable linebreak-style */
const dbPool = require('../config/database');

const getAllHarga = () => {
  const sqlQuery = 'SELECT * FROM hargaberas';
  return dbPool.execute(sqlQuery);
};

const createNewHarga = (body) => {
  const sqlQuery = `INSERT INTO hargaberas (provinsi, harga) 
                        VALUES ('${body.provinsi}', '${body.harga}')`;
  return dbPool.execute(sqlQuery);
};

const updateHarga = (body, id) => {
  const sqlQuery = `UPDATE hargaberas 
                        SET provinsi='${body.provinsi}', harga='${body.harga}'
                        WHERE id = ${id}`;
  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllHarga,
  createNewHarga,
  updateHarga,
};
