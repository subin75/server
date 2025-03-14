const express = require('express');
const memo = express.Router()

let data = [];


memo.get('/', function (req, res) {
  res.send(data)
})

memo.post('/', function (req, res) {
  console.log(req);

  data.push(req.body);
  res.send(data)
})

module.exports = memo;