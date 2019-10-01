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

const editTodo = async(id,todo) => {
    
    return Todo.findByIdAndUpdate(id,{ $set : todo });

}

module.exports = {
    addTodo,
    getTodos,
    editTodo
}