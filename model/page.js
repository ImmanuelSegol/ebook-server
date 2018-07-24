const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;


const page = Schema({
        title:{
            type:String,
            isRequired:true,
        },
        date:{
            type:String,
            isRequired:true,
            default:moment().format('LL')
        },
        details:{
            type:String,
            isRequired:true,
        },
        type:{
            type:String,
            isRequired:true,
            enum:['PDF','SWF','Aframe','Video']
        },
        link:{
            type:String,
            isRequired:true,
        },
    }
);


const Pages = mongoose.Model('page',page);