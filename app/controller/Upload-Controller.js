const pdfModel = require('../models/pdf') 


function UploadController(){
    return {
        index(req,res){
           
            res.render('Upload')
        },
        upload(req,res){
           
           if (!req.body)
           {
               res.send("Course requirement is Mandatory")
               
           }else if(!req.file){
               res.send("File Selection is required")
           } else{
            var course = req.body.Courses
            var filename = req.file.originalname
            var newPdf = new pdfModel({
                FileName : filename,
                Address : 'G:/Projects/Under Development/EduCon/public/pdf/Sample.pdf',
                Course: course
               })
               newPdf.save().then(result=>{
                   console.log(result)
                res.send("<h1> Upload Successful </h1>")
               }).catch(err=>{
                   console.log(err)
                   res.send("Something went wrong")
               })
           }

           
           
           
        }
    }
}

module.exports = UploadController

