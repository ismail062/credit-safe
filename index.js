
const express = require('express');
const bodyParser = require('body-parser') 

const router = require('./src/routes/')

const port =  process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.use(router);

app.listen(port);