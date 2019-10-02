const Todo = require('../../models/todo/todo');
const mongoose = require('mongoose');


const getTodos = async() => {
    return Todo.find()
}

const addTodo = async(name) => {
    
    let newTodo = new Todo({
        name
    });

    return newTodo.save()
};

const editTodo = async(id,todo) => {
    
        return Todo.findByIdAndUpdate(id,{ $set : todo },{ new : true })

}

const deleteTodo = (id) => {

    return Todo.findByIdAndDelete(id)

}

module.exports = {
    addTodo,
    getTodos,
    editTodo,
    deleteTodo
}