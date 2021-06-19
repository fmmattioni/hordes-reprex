const express = require('express');

const iris = require('./iris');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/iris', iris);

module.exports = router;
