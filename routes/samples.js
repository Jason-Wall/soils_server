const express = require('express');
const router = express.Router();

const samples = require('../db/query/samplesdb');


//GET /samples - get all samples
router.get('/', (req, res) => {
  samples.getAllSamples()
    .then((samplesJSON) => {
      res.send(samplesJSON);
    })
    .catch(() => {
      console.log('Error obtaining samples');
    }
    );
});

//GET /samples/:id - get individual sample info
router.get('/:id', (req, res) => {
  samples.getSample(req.params.id)
    .then((sampleJSON) => {
      res.send(sampleJSON);
    })
    .catch(() => {
      console.log('Error obtaining sample:', req.params.id);
    }
    );
});

//GET /samples/:id/psd - get all psd data for a sample
router.get('/:id/psd', (req, res) => {
  samples.getSamplepsd(req.params.id)
    .then((psdJSON) => {
      res.send(psdJSON);
    })
    .catch(() => {
      console.log('Error obtaining sample:', req.params.id);
    }
    );
});

module.exports = router;