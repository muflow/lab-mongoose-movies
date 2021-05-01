const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB => {
        res.render('movies/index', { movies: moviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
       next(error);
    });
});


router.get('/create', (req, res, next) => {
  res.render('movies/create');
});

router.post('/create', (req, res, next) => {
    const { title, genre, plot } = req.body;

    Movie.create({ title, genre, plot })
    .then(() => res.redirect('/movies'))
    .catch(error => {
      next(error)
    });
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((details) => res.render('movies/details', { show: details }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
      next(error)
    });
});

router.post('/:id/delete', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.id)
  .then(() => res.redirect('/movies'))
    .catch(error => {
      next(error)
    });
});


router.get('/:id/edit', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((editMovie) => res.render('movies/edit', { edit: editMovie}))
    .catch(error => {
        next(error)
    });
});


router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;

  Movie.findByIdAndUpdate(id, { title, genre, plot }, { new: true })
    .then(() => {
      
      res.redirect('/movies')
  })
    .catch(error => next(error));
});




module.exports = router;