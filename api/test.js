const express = require('express');
const test = express.Router()

let data = [
    {id:0,name:'수박'},
    {id:1,name:'딸기 주스'},
    {id:2,name:'딸기 라떼'},
    {id:3,name:'딸기 스무디'},
    {id:4,name:'토마토'},
    {id:5,name:'고구마'}
];

test.get('/t1', function (req, res) {
    // const {name} = req.query;
    res.send(data)
})

test.post('/t2', function (req, res) {
    data.push(req.body);
    res.send(data)
})

test.get('/search', function (req, res) {
    const {name} = req.query;
    const result = data.filter(item => item.name.includes(name));
    res.send(result)
})

module.exports = test;