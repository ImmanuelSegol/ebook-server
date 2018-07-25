const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const pages = require('./page');


const eBookSchema = new Schema({
    creator:{
        type: String,
        required:true
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
    pages:[pages],
});

const Ebooks = mongoose.model('Ebook',eBookSchema); 

module.exports = Ebooks;