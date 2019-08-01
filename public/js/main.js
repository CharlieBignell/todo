// Get the two list elements
taskList_active = document.getElementById('taskList_active')
taskList_completed = document.getElementById('taskList_completed')


// For each active task
tasks_active.forEach(function (task) {
    let task_el = document.createElement('div')
    task_el.classList.add('task')

    // The task text
    let p = document.createElement('p')
    p.innerHTML = task

    // The 'remove' button
    let b = document.createElement('button')
    b.addEventListener('click', function (e) {

        // Send an XMLHTTP POST request with the task to remove
        let xhr = new XMLHttpRequest();
        xhr.open("POST", '/completeTask', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({ task: task }))

        location.reload()
    })
    b.innerHTML = "Done"

    task_el.appendChild(p)
    task_el.appendChild(b)
    taskList_active.appendChild(task_el)
})

// For each of the completed tasks
tasks_complete.forEach(function (task) {
    let task_el = document.createElement('div')
    task_el.classList.add('task')

    // The task text
    let p = document.createElement('p')
    p.innerHTML = task

    // The 'remove' button
    let b = document.createElement('button')
    b.addEventListener('click', function (e) {

        // Send an XMLHTTP POST request with the task to remove
        let xhr = new XMLHttpRequest();
        xhr.open("POST", '/removeTask', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({ task: task }))

        location.reload()
    })
    b.innerHTML = "Remove"

    task_el.appendChild(p)
    task_el.appendChild(b)
    taskList_completed.appendChild(task_el)

})