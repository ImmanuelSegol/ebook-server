const mongoose = require('mongoose');
const moment = require('moment');
const subPages = require('./subPage.js');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
        parentPage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Ebook'
        },
        title:{
            type:String,
            required:true,
        },
        date:{
            type:String,
            required:true,
            default:moment().format('LL')
        },
        details:{
            type:String,
            required:true,
        },
        mediatype:{
            type:String,
            required:true,
            enum:['PDF','SWF','Aframe','Video']
        },
        link:{
            type:String,
            required:true,
        },
    }
);


const Pages = mongoose.model('Page',pageSchema);

module.exports = Pages;

