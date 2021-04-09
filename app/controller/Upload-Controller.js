const courseModel = require('../models/Course') 
const multer = require('multer')
const upload = multer({dest: '/pdf'})

function UploadController(){
    return {
        index(req,res){
           
            res.render('Upload')
        },
        upload(req,res){
           console.log(req.body)
           console.log(req.file)
           res.send("<h1> THIS IS RUNNING </h1>")
        }
    }
}

module.exports = UploadController

