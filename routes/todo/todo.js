const app = require('express')();
const mongoose = require('mongoose');
const { addTodo, getTodos, editTodo, deleteTodo } = require('../../controllers/todo/todo');
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

app.patch('/todo/:id', async(req,res) => {
    
    let todo = {
        name : req.body.name,
        completed : req.body.completed
    }

    try {
        await validParams(todo);
        let updatedTodo = await editTodo(req.params.id, todo);
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json(error);
    }


});

app.delete('/todo/:id', async(req,res) => {
    
    try {
        await deleteTodo(req.params.id);
        res.json('deleted');
    } catch (error) {
        res.status(400).json(err);
    }

});

module.exports = app;