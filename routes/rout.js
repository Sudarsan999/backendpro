const express = require('express');
const router = express.Router();


const Signup = require('../models/signup')

const Query = require('../models/query');
const paymentController = require('../controllers/Payments');

const aboutController = require('../controllers/about')

const homeController = require('../controllers/home')

//routing the functionalities

router.post('/payment', paymentController.payment);
router.post('/paymentCallback', paymentController.paymentCallback);
router.get('/about',aboutController.about);
router.get('/home',homeController.home)

router.post('/signup',async(req,res) => {
    console.log("post section")
    const data = new Signup({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        mobile: req.body.mobile
    });
    const val =await data.save();
    res.send("user thankyou for your details");
    console.log(val);
})

router.post('/query',async(req,res) => {
    console.log("post section")
    const data = new Query({
        recomend: req.body.recomend,
        about: req.body.about
        
    });
    const hal =await data.save();
    res.send("user thankyou for your query now go back and enter your user details");
    console.log(hal);
})


module.exports=router