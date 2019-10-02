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

const editTodoName = async(id,{name}) => {
    
    return Todo.findByIdAndUpdate(id,{ $set : {name} },{ new : true }).orFail('No docs found')

}

const changeTodoState = (id,state) => {

    return Todo.findByIdAndUpdate(id, { $set : {completed : state} }, { new : true }).orFail('No docs found');

}

const deleteTodo = (id) => {

    return Todo.findByIdAndDelete(id)

}

module.exports = {
    addTodo,
    getTodos,
    editTodoName,
    deleteTodo,
    changeTodoState
}