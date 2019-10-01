const express = require('express');
const app = express();

//middleware


//routes
app.use(require('./routes'));

//server
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});