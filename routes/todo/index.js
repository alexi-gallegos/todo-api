const app = require('express')();

app.use(require('./todo'));

module.exports = app;