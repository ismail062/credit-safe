
const express = require('express');
const bodyParser = require('body-parser') 

const { configureSwagger } = require('./src/docs/')
 

const cors = require('cors')

const router = require('./src/routes/')

const port =  process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

configureSwagger(app);

app.use(router);

app.listen(port);