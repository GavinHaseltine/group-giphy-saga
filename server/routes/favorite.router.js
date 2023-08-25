const express = require('express');
const pool = require('../modules/pool');



const router = express.Router();
router.use(express.json())

// return all favorite images
router.get('/', (req, res) => {
  const  queryText = 'SELECT * FROM "favorites";'
  pool.query(queryText)
    .then((results) => {
      res.send(results.rows)
    })
    .catch((error) => {
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log("req.body!!!!", req.body)
  const urlKey = Object.keys(req.body)[0]; 
  const queryText = `INSERT INTO "favorites" ("url")
  VALUES ($1);`
  const queryParams = [urlKey]
  pool.query(queryText,queryParams)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        res.sendStatus(500);
        console.log("HERE", req.body)
      })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
let category_id = req.body.category_id
let favID = req.params.favId
const queryText = `UPDATE "favorites" SET category_id = $1 WHERE id = $2;`
const queryParams = [category_id, favID]
pool.query(queryText,queryParams)
    .then((results) => {
      res.sendStatus(200);
    }).catch((error) => {
      res.sendStatus(500);
    })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
