const express = require('express');
const Celebrity = require('../models/Celebrity.model');

const router = express.Router();

router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
  .then(allTheCelebritiesFromDB => {
     res.render('celebrities/list', { celebrities: allTheCelebritiesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
       next(error);
    });
});



module.exports = router;