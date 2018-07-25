const mongoose = require('mongoose');
const moment = require('moment');
const subPages = require('./subPage.js');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
        parentId:{
            type:String,
            required:true,
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
        mediaype:{
            type:String,
            required:true,
            enum:['PDF','SWF','Aframe','Video']
        },
        link:{
            type:String,
            required:true,
        },
        subPage:[subPages],
    }
);


const Pages = mongoose.model('Page',pageSchema);

module.exports = pageSchema;

