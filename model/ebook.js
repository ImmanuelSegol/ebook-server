const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const Schema = mongoose.Schema;

const User = require('./user.js')


const eBook = new Schema({
    creator: User,
    id: {
        type: String,
        isRequired:true,
        default: uuidv1(),
    },
    title:{
        type: String,
        isRequired:true,
    },
    date: {
        type:String,
        isRequired:true,
        default:moment().format('LL'),
    },
    details:{
        type:String,
        isRequired:true,
    },
});

const Ebooks = mongoose.model('Ebook',eBook); 

module.exports = Ebooks;