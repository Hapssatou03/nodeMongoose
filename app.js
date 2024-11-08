const db = require("./database/setup"); // Do not edit/remove this line

// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
  const newTodo = new db({
    name: name,
    priority: priority,
    done: false,
  });
  newTodo.save().then(() => {
    db.find().then((data) => {
      console.log(data);
    });
  });
}

//createTodo("listen", 5);

// Complete one todo by name (update property done = true)
function completeTodo(name) {
  db.updateOne({ name: name }, { done: true }).then(() => {
    db.find().then((data) => {
      console.log(data);
    });
  });
}
//completeTodo("listen");
// Delete one todo by name
function deleteTodo(name) {
  db.deleteOne({ name: name }).then(() => {
    db.find().then((data) => {
      console.log(data);
    });
  });
}
deleteTodo("listen");
module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line
