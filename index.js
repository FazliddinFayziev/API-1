const config = require('config');
require('dotenv').config();
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const auth = require('./routes/auth');
const express = require('express');
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi)
const app = express();
const user = require('./routes/user');

if (!process.env.VIDLY_JWT_PRIVATE_KEY) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

mongoose.connect('mongodb+srv://fazrez4515:ZmFmRf4515@cluster0.fwoxgwi.mongodb.net/Renting?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use('/api/users', user);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));