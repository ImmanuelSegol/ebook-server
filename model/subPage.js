const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const subPageSchema = new Schema({
    title:{
        type: String,
        required:true,
    },
    details: {
        type: String,
        required:true,
    },
    mediaType:{
        type:String,
        required:true,
        enum:['PDF','SWF','Aframe','Video']
    },
    link:{
        type:String,
        required:true,
    }
});


const SubPages = mongoose.model('SubPage',subPageSchema);

module.exports = SubPages;