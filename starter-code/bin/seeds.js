const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
// require("../configs"); 

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  { name: 'Neeno', occupation: 'part-time singer', catchPhrase: 'yes' },
  { name: 'Peeno', occupation: 'baritono', catchPhrase: 'naa' },
  { name: 'Foxx', occupation: 'singer', catchPhrase: 'maybe' }
];

Celebrity.create(celebrities)
    .then(celebritiesForDB => {
    console.log(`Created ${celebritiesForDB.length} celebrities`);
    mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));