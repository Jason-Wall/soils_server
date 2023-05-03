const db = require('../db');

const getAllProjects = () => {
  return db
    .query('SELECT * FROM projects;')
    .then(projects => {
      return projects.rows;
    });
};

const getProject = (projectId) => {
  const queryObj = {
    text: `SELECT * FROM projects WHERE id = $1;`,
    values: [projectId]
  };
  return db
    .query(queryObj)
    .then(project => {
      return project.rows;
    });
};

const getProjectSamples = (projectId) => {
  const queryObj = {
    text: `SELECT * FROM samples WHERE project_id = $1;`,
    values: [projectId]
  };
  return db
    .query(queryObj)
    .then(samples => {
      return samples.rows;
    });
};

module.exports = { getAllProjects, getProject, getProjectSamples };