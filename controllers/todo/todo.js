const Todo = require('../../models/todo/todo');


const getTodos = async() => {
    return Todo.find()
}

const addTodo = async(name) => {
    
    let newTodo = new Todo({
        name
    });

    return newTodo.save()
};

module.exports = {
    addTodo,
    getTodos
}