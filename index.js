const express = require('express');
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));

let tasks = ["active task"]
let completed = ["finished task"]

// POST methods
app.post('/addtask', function (req, res) {
    let newTask = req.body.newtask
    if(newTask.toString().length > 0){tasks.push(newTask)}
    res.redirect("/")
});

app.post("/removetask", function (req, res) {
    let completeTask = req.body.check;
    console.log(completeTask)
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        tasks.splice(tasks.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            tasks.splice(tasks.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});


// GET methods
app.get("/", function (req, res) {
    console.log(typeof tasks)
    res.render("index", { tasks: tasks, completed: completed })
});


// Start server
app.listen(3000, function () {
    console.log('Listening on port 3000')
})