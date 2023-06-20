const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const signupschema = new Schema({
    fname:{
        type:String,
        
    },
    
    lname:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
    mobile:{
        type:String,
        
    }
})

module.exports = mongoose.model("signup",signupschema);