const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userName:{
        type: String,
        require: true,
        unique: true,
    },
    firstName:{
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
});

const Users = mongoose.model('User', user);

module.exports = Users;