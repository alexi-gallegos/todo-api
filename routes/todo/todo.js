const app = require('express')();
const { addTodo, getTodos } = require('../../controllers/todo/todo');

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
    res.json('patch todo');
});

app.delete('/todo/:id', (req,res) => {
    res.json('delete todo');
});

module.exports = app;