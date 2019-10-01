const Todo = require('../../models/Todo/todo');


const addTodo = (todo) => {
    
    let newTodo = new Todo({
        name : todo.name
    });

    return newTodo.save()
};

module.exports = {
    addTodo
}