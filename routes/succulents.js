import express from 'express';
const router = express.Router();
import db from '../models/db'
let Succulents;

db((err, database) => {
  if (err) throw err;
  else Succulents = database.collection("Succulents");
})

/* GET home page. */
router.get('/:family/:genus/:species', (req, res, next) => {
  let result = []
  let cursor = Succulents.find({
    "family": req.params.family,
    "genus": req.params.genus,
    "species": req.params.species
  })
  cursor.each((err, doc) => {
    if (err = null) throw err
    if (doc != null) {
      result.push(doc)
    } else {
      res.json(result)
    }
  })
});

export default router
