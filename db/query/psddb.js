const db = require('../db');

const getAllpsd = () => {
  return db
    .query('SELECT * FROM psd;')
    .then(psds => {
      return psds.rows;
    });
};

const getpsd = (psdId) => {
  const queryObj = {
    text: `SELECT * FROM psd WHERE id = $1;`,
    values: [psdId]
  };
  return db
    .query(queryObj)
    .then(psd => {
      return psd.rows;
    });
};

module.exports = { getAllpsd, getpsd };