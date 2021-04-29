const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(CelebsFromDB => {
    res.render('celebrities/index', { celebrities: CelebsFromDB });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
       next(error);
    });
});

router.get('/show/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((details) => res.render('celebrities/show', { show: details }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
      next(error)
    });
});


module.exports = router;