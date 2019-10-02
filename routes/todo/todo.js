const app = require('express')();
const { addTodo, 
        getTodos, 
        editTodoName, 
        deleteTodo, 
        changeTodoState } = require('../../controllers/todo/todo');
const { validObjectId } = require('../../middlewares/middlewares');
const { validParams } = require('../../helpers/helpers');

app.get('/todo', (req,res) => {

    getTodos().then(resp => {
        res.json(resp);
    }).catch(err => {
        res.status(400).json(err);
    })
    
});

app.post('/todo', (req,res) => {
    let {name} = req.body;

    addTodo(name).then(resp => {
        res.json('new todo added');
    }).catch(err => {
        res.status(400).json({err});
    })
});

app.patch('/todo/:id',validObjectId, async(req,res) => {
    
    let todo = {
        name : req.body.name
    }

    try {
        await validParams(todo);
        let updatedTodo = await editTodoName(req.params.id, todo);
        res.json(updatedTodo);
    } catch (error) {     
        if (error === "No docs found") return res.status(404).json(error)

        res.status(400).json(error);        

    }
});

app.patch('/todo/change_state/:id',validObjectId, async(req,res) => {
    
    try {
        
        let todoUpdated = await changeTodoState(req.params.id, req.body.completed);
        res.json(todoUpdated);

    } catch (error) {
        if (error === "No docs found") return res.status(404).json(error)

        res.status(400).json(error);
    }

});

app.delete('/todo/:id',validObjectId, async(req,res) => {
    
    try {
        await deleteTodo(req.params.id);
        res.json('deleted');
    } catch (error) {
        res.status(400).json(err);
    }

});

module.exports = app;