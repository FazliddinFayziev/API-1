const express = require('express');
const app = express();
const winston = require('winston');

require('express-async-errors');
require('dotenv').config();
require('./startup/validation');
require('./startup/routes')(app);
require('./startup/config')();
require('./startup/db')();


const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));