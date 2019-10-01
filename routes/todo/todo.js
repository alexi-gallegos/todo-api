const app = require('express')();
const mongoose = require('mongoose');
const { addTodo, getTodos, editTodo } = require('../../controllers/todo/todo');

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

app.patch('/todo/:id', (req,res) => {
    
    let todo = {
        name : req.body.name,
        completed : req.body.completed
    }

    editTodo(req.params.id,todo).then(resp => {
        res.json('todo updated');
    }).catch(err => {
        if(err instanceof mongoose.CastError){
            res.status(400).json({message : 'Todo not found by this ID'});
        }else{
            res.status(400).json(err);
        }
    })

});

app.delete('/todo/:id', (req,res) => {
    res.json('delete todo');
});

module.exports = app;