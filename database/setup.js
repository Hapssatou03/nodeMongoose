// You should close this file and not modify it 😉

require("dotenv").config();
const mongoose = require("mongoose");
const connectionString = require("../connection");
console.log(connectionString);
mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));

const todoSchema = mongoose.Schema({
  name: String,
  priority: Number,
  done: Boolean,
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = Todo;
