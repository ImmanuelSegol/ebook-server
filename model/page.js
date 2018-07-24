const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;


const page = Schema({
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
    }
);


const Pages = mongoose.Model('page',page);