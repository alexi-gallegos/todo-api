const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//db connection
mongoose.set('useFindAndModify',false);
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