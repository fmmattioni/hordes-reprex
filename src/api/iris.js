const express = require('express');
const { library } = require('hordes');

const reprexhordes = library('reprexhordes');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const output = await reprexhordes.return_iris();
    console.log(output);
    res.json(JSON.parse(output));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/excel', async (req, res) => {
  try {
    const output = await reprexhordes.return_iris_excel();
    console.log(output);
    res.json(JSON.parse(output));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
