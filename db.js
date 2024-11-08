const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Prabhjot:VC0322U020@cluster0.t0voc.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})


const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
}

