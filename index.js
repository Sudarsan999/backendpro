const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

require('dotenv').config();

const routes = require('./routes/rout');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/',routes);

app.get("/",(req,res) => {
    res.json("welcome to backend");
})





mongoose.connect(
    'mongodb+srv://repalaswaraj24:swaraj@cluster0.pomougc.mongodb.net/food-order?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    app.listen(port,()=>{
        console.log("connected to db")
        console.log("server is running on the port : "+port)
    })
}).catch(err => {
    console.log("error connecting to db : "+err)
})
