const express = require('express');
const router = express.Router();

const psd = require('../db/query/psddb');


//GET /psd - get all psd data
router.get('/', (req, res) => {
  psd.getAllpsd()
    .then((psdJSON) => {
      res.send(psdJSON);
    })
    .catch(() => {
      console.log('Error obtaining psd data');
    }
    );
});

//GET /psd/:id - get psd data for single test
router.get('/:id', (req, res) => {
  psd.getpsd(req.params.id)
    .then((psdJSON) => {
      res.send(psdJSON);
    })
    .catch(() => {
      console.log('Error obtaining psd data');
    }
    );
});

module.exports = router;