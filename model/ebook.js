const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const Page = require('./page');


const eBookSchema = new Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type: String,
        required: true
    },
    date: {
        type:String,
        required: true,
        default:moment().format('LL'),
    },
    details:{
        type:String,
        required: true,
    },
    pages:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Page'
    }
});

const Ebooks = mongoose.model('Ebook',eBookSchema); 

module.exports = Ebooks;