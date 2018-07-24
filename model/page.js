const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const SubPages = require('./subPage'); 

const page = Schema({
        parentId:{
            type:Schema.Types.ObjectId,
            ref:'Ebook',
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
        type:{
            type:String,
            required:true,
            enum:['PDF','SWF','Aframe','Video']
        },
        link:{
            type:String,
            required:true,
        },
        subPages:[SubPages]
    }
);


const Pages = mongoose.Model('Page',page);

