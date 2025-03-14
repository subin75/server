const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const test = require('./api/test'); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',test);

app.listen(4000)