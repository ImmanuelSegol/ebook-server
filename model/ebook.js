const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;




const eBook = new Schema({
    creator:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
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
    pages:[{ type: Schema.Types.ObjectId, ref: 'Page',required: true }]
});

const Ebooks = mongoose.model('Ebook',eBook); 

module.exports = Ebooks;