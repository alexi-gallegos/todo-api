const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//middleware

//db connection
mongoose.connect(process.env.DB_URL,{useNewUrlParser : true, useUnifiedTopology : true},(err,res) => {
    if (err) throw err;

    console.log('db connected');
});

//routes
app.use(require('./routes'));

//server
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});