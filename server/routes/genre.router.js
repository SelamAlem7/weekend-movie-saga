const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `SELECT * FROM "genres" ORDER BY "name" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('ERROR: Get all genres', error);
      res.sendStatus(500)
    })
  // Add query to get all genres
 
});

module.exports = router;