const pdfModel = require('../models/pdf') 
const path = require('path')
const course_Model = require('../models/Course')
const video_model = require('../models/video')


function UploadController(){
    return {
        index(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('UploadNotes',{course: course})
                }
                
            })
            
        },
        upload(req,res){
           
           if (!req.body)
           {
               res.send("Course requirement is Mandatory")
               
           }else if(!req.file){
               res.send("File Selection is required")
           } else{
            var course = req.body.Course
            var filename = req.file.originalname
            console.log(course)
            var newPdf = new pdfModel({
                FileName : filename.split(" ").join("") ,
                Address : 'G:/Projects/Under Development/EduCon/public/pdf/'+filename.split(" ").join(""),
                Course: course
               })
               newPdf.save().then(result=>{
                   
                res.send("<h1> Upload Successful </h1>")
               }).catch(err=>{
                   console.log(err)
                   res.send("Something went wrong")
               })
           }

                      
           
        },
        courseORnote(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('Selecting-Course-or-notes',{course: course})
                }
                
            })
           
        },
        uploadCourse(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('uploadCourse',{course: course})
                }
                
            })
        },

        uploadNewCourse(req,res){
            var newCourse = req.body.newCourse
            var uploadCourse = new course_Model({
                Course : newCourse
            })

            uploadCourse.save().then(result=>{
                res.send('Upload of new Course is Done')
            }).catch(err=>{
                res.send(err)
            })
        },
        getUploadVideo(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('uploadVideo',{course: course})
                }
                
            })
        },
        video(req,res){
            var embeddingLink = req.body.embeddingLink
            var videoName = req.body.videoName
            var Course = req.body.Course
            var videoData = new video_model({
                videoName : videoName,
                videoEmbeddingCode : embeddingLink,
                course: Course
            })
            videoData.save().then(result=>{
                res.send("Video Upload Succsseful ")
            }).catch(err=>{
                console.log(err)
                res.send("Some Thing went Wrong")
                
            })
            
           
        }
    }
}

module.exports = UploadController

