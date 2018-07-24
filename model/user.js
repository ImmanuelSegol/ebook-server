const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema({
    userName:{
        type: String,
        isRequired: true,
        unique: true,
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

const Users = mongoose.model('User', user);

module.exports = Users;