const db = require('../db');

const getAllSamples = () => {
  return db
    .query('SELECT * FROM samples;')
    .then(samples => {
      return samples.rows;
    });
};

const getSample = (projectId) => {
  const queryObj = {
    text: `SELECT * FROM samples WHERE id = $1;`,
    values: [projectId]
  };
  return db
    .query(queryObj)
    .then(project => {
      return project.rows;
    });
};

const getSamplePSD = (projectId) => {
  const queryObj = {
    text: `SELECT * FROM PSD WHERE project_id = $1;`,
    values: [projectId]
  };
  return db
    .query(queryObj)
    .then(PSD => {
      return PSD.rows;
    });
};

module.exports = { getAllSamples, getSample, getSamplePSD };