const express = require('express');
const router = express.Router();

//GET /clients - get all clients
router.get('/', (req, res) => {
  res.send('/clients - success');
});

module.exports = router;