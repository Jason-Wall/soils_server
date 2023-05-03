const db = require('../db');

const getAllClients = () => {
  return db
    .query('SELECT * FROM clients;')
    .then(clients => {
      return clients.rows;
    });
};

const getClient = (clientId) => {
  const queryObj = {
    text: `SELECT * FROM clients WHERE id = $1;`,
    values: [clientId]
  };
  return db
    .query(queryObj)
    .then(client => {
      return client.rows;
    });
};

const getClientProjects = (clientId) => {
  const queryObj = {
    text: `SELECT * FROM projects WHERE client_id = $1;`,
    values: [clientId]
  };
  return db
    .query(queryObj)
    .then(client => {
      return client.rows;
    });
};

module.exports = { getAllClients, getClient, getClientProjects };