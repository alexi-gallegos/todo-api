const app = require('express')();

app.get('/todo', (req,res) => {
    res.json('all todos');
});

app.post('/todo', (req,res) => {
    res.json('new todo');
});

app.patch('/todo/:id', (req,res) => {
    res.json('patch todo');
});

app.delete('/todo/:id', (req,res) => {
    res.json('delete todo');
});

module.exports = app;