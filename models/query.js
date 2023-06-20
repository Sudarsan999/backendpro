const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queryschema = new Schema({
    recomend:{
        type:String,
        
    },
    
    about:{
        type:String,
       
    }
})

module.exports = mongoose.model("queries",queryschema);