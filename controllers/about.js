 const About = require('../models/about');

exports.about= (req,res) => {
    About.find().then(
        result => {
            res.status(200).json({
                message: "about details fetched",
                about : result
            })
        }
    ).catch(err => {
         res.status(500).json({
            message : "error in database",
            error : err
         })   
    })
}