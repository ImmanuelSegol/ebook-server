const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subPage = Schema({
    //parentId:1234,
    title:{
        type: String,
        isRequired:true,
    },
    details: {
        type: String,
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
    }
});


const SubPages = mongoose.Model('subPage',subPage);