const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let todoSchema = new Schema({
    name : {
        type : String,
        required : [true, 'El nombre es requerido.']
    },
    completed : {
        type : Boolean,
        default : false    
    }
});


module.exports = mongoose.model('Todo', todoSchema);