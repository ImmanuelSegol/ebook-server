const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    admin:{
        type: Boolean,
        default:false,
    }
});

User.plugin(passportLocalMongoose);

const Users = mongoose.model('User', User);

module.exports = Users;