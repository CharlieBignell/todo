const express = require('express');
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

let task = ["buy socks", "practise with nodejs"]

app.post('/addtask', function (req, res) {
    let newTask = req.body.newtask
    task.push(newTask)
    res.redirect("/")
});

app.get("/", function (req, res) {
    res.render("index", { task: task })
});

app.listen(3000, function () {
    console.log('Listening on port 3000')
})