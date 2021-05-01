const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');
// require("../configs"); 

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebrities = [
//   { name: 'Neeno', occupation: 'part-time singer', catchPhrase: 'yes' },
//   { name: 'Peeno', occupation: 'baritono', catchPhrase: 'naa' },
//   { name: 'Foxx', occupation: 'singer', catchPhrase: 'maybe' }
// ];

// Celebrity.create(celebrities)
//     .then(celebritiesForDB => {
//     console.log(`Created ${celebritiesForDB.length} celebrities`);
//     mongoose.connection.close();
//     })
//     .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));


const movies = [
  { title: 'Lunes', genre: 'fear', plot: 'buuuuu' },
  { title: 'Invierno', genre: 'hot', plot: 'brrrr' },
  { title: 'Poverty', genre: 'drama', plot: 'sic!' },
  { title: 'Viernes', genre: 'brilliant', plot: 'sasca' }
];

Movie.create(movies)
    .then(moviesForDB => {
    console.log(`Created ${moviesForDB.length} movies`);
    mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));