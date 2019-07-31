const express = require('express');
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/addtask', function (req, res) {
    res.render('index')
})

app.listen(3000, function () {
    console.log('Listening on port 3000')
})