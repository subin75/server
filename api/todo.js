const express = require('express');
const todo = express.Router()

let data = [];

todo.get('/', function (req, res) {
  res.send(data)
})

todo.post('/', function (req, res) {
  data.push(req.body);
  res.send(data)
})

todo.delete('/', function (req, res) {
    const {id} = req.query
    let d = data.filter(item=>item.id != id);                

    data = d;
    res.send(data)
  })

module.exports = todo;