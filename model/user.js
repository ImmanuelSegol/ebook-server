const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const Schema = mongoose.Schema;


const user = Schema({
    id:{
        type: String,
        isRequired: true,
    },
    firstName:{
        type: String,
        isRequired: true,
    },
    lastName:{
        type: String,
        isRequired: true,
    },
});

const User = mongoose.model('User',user);

model.exports = User;