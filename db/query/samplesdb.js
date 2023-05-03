const db = require('../db');

const getAllSamples = () => {
  return db
    .query('SELECT * FROM samples;')
    .then(samples => {
      return samples.rows;
    });
};

const getSample = (sampleId) => {
  const queryObj = {
    text: `SELECT * FROM samples WHERE id = $1;`,
    values: [sampleId]
  };
  return db
    .query(queryObj)
    .then(sample => {
      return sample.rows;
    });
};

const getSamplepsd = (sampleId) => {
  const queryObj = {
    text: `SELECT * FROM psd WHERE sample_id = $1;`,
    values: [sampleId]
  };
  return db
    .query(queryObj)
    .then(psd => {
      return psd.rows;
    });
};

module.exports = { getAllSamples, getSample, getSamplepsd };