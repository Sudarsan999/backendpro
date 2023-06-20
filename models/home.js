const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutschema = new Schema({
    mainimg: {
        type: String,
        required : true
    },
    maintext: {
        type : String,
        required : true
    },
    subtext: {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('home',aboutschema,'home');