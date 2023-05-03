const express = require('express');
const router = express.Router();

const projects = require('../db/query/projectsdb');
const samples = require('../db/query/samplesdb');


//GET /projects - get all projects
router.get('/', (req, res) => {
  projects.getAllProjects()
    .then((projectsJSON) => {
      res.send(projectsJSON);
    })
    .catch(() => {
      console.log('Error obtaining projects');
    }
    );
});

//GET /projects/:id - get individual project info
router.get('/:id', (req, res) => {
  projects.getProject(req.params.id)
    .then((projectJSON) => {
      res.send(projectJSON);
    })
    .catch(() => {
      console.log('Error obtaining project:', req.params.id);
    }
    );
});

//GET /projects/:id/psd - get all sample data for a project
router.get('/:id/samples', (req, res) => {
  projects.getProjectSamples(req.params.id)
    .then((samplesJSON) => {
      res.send(samplesJSON);
    })
    .catch(() => {
      console.log('Error obtaining project:', req.params.id);
    }
    );
});

module.exports = router;