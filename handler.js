/* jshint node: true */
'use strict';

const sls = require('serverless-http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/routes');

app.use(bodyParser.json({limit: '3mb'}));
app.use(cors());
app.use('/', routes);

module.exports.generic = sls(app);
