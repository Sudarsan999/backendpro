const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutschema = new Schema({
 abouttext:{
    type : String,
    required : true
 }
})

module.exports = mongoose.model('about',aboutschema,'about');