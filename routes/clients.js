const express = require('express');
const router = express.Router();

const clients = require('../db/query/clientsdb');
const projects = require('../db/query/projectsdb');


//GET /clients - get all clients
router.get('/', (req, res) => {
  clients.getAllClients()
    .then((clientsJSON) => {
      res.send(clientsJSON);
    })
    .catch(() => {
      console.log('Error obtaining clients');
    }
    );
});

//GET /clients/:id - get individual client info
router.get('/:id', (req, res) => {
  clients.getClient(req.params.id)
    .then((clientJSON) => {
      res.send(clientJSON);
    })
    .catch(() => {
      console.log('Error obtaining client:', req.body.id);
    }
    );
});

//GET /clients/:id/projects - get individual client info
router.get('/:id/projects', (req, res) => {
  clients.getClientProjects(req.params.id)
    .then((projectsJSON) => {
      res.send(projectsJSON);
    })
    .catch(() => {
      console.log('Error obtaining client:', req.body.id);
    }
    );
});

module.exports = router;