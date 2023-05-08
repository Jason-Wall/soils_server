const db = require('../db');

const getAllpsd = () => {
  return db
    .query(`SELECT psd.*, 
    samples.serial AS sample_serial, 
    samples.sampled_date AS sample_date 
    FROM psd
    JOIN samples ON samples.id = sample_id;`)
    .then(psds => {
      return psds.rows;
    });
};

const getpsd = (psdId) => {
  const queryObj = {
    text: `SELECT psd.*,
    samples.serial AS sample_serial, 
    samples.sampled_date AS sample_date
    FROM psd 
    JOIN samples ON samples.id = sample_id
    WHERE psd.id = $1;`,
    values: [psdId]
  };
  return db
    .query(queryObj)
    .then(psd => {
      return psd.rows;
    });
};

module.exports = { getAllpsd, getpsd };