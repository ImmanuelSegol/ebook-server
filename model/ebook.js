const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const Schema = mongoose.Schema;

const User = require('./user.js')


const eBook = new Schema({
    creator: User,
    title:{
        type: String,
        require:true,
    },
    date: {
        type:String,
        require:false,
        default:moment().format('LL'),
    },
    details:{
        type:String,
        require:true,
    },
    pages:[[{ type: Schema.Types.ObjectId, ref: 'Page' }]]
});

const Ebooks = mongoose.model('Ebook',eBook); 

module.exports = Ebooks;