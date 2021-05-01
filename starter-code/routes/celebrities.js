const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/', (req, res, next) => {
  Celebrity.find()
  .then(CelebsFromDB => {
    res.render('celebrities/index', { celebrities: CelebsFromDB });
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
       next(error);
    });
});

router.get('/create', (req, res, next) => {
  res.render('celebrities/create');
});

router.post('/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
 
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities'))
    .catch(error => {
      next(error)
    });

});

router.get('/:id', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((details) => res.render('celebrities/show', { show: details }))
    .catch(error => {
      console.log('Error while retrieving celeb details: ', error);
      next(error)
    });
});


router.get('/:id/edit', (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((editCeleb) => res.render('celebrities/edit', { edit: editCeleb}))
    .catch(error => {
        next(error)
    });
});

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase }, { new: true })
    .then(() => {
      
      res.redirect('/celebrities')
  })
    .catch(error => next(error));
});

router.post('/:id/delete', (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/celebrities'))
    .catch(error => {
      next(error)
    });
});




module.exports = router;