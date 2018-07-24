const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const subPage = Schema({
    title:{
        type: String,
        required:true,
    },
    details: {
        type: String,
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
    }
});


const SubPages = mongoose.Model('SubPage',subPage);

module.exports = SubPages;