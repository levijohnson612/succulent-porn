import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/:family/:genus/:species', (req, res, next) => {
  res.render('index', {
    "title": 'Taxonomy',
    "family": req.params.family,
    "genus": req.params.genus,
    "species": req.params.species,
  });
});

export default router
