const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

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


module.exports = router;
