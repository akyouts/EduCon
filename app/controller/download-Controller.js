const pdf_model = require('../models/pdf') 
const courseModel = require('../models/Course')
const video_model = require('../models/Uploadvideo')



function downloadController(){
    return {
        async index(req,res){
            if (req.body.selector === 'PDF') {
                
                await pdf_model.find({ Course: req.body.Course_selected }).then(result =>{
                    if (result.length === 0) {
                        res.send("<h1>Notes are not available</h1>")
                    }
                    else{
                        courseModel.find({},(err,course)=>{
                            if (err) {
                                res.send("Some thing went wrong")
                            }
                            else{
                                
                                res.render('DownloadNotes',{ file: result , course: course, user: req.cookies.user, jwt:req.cookies.jwt  })
                            }
                        })
                    }
                    
                    
                }).catch(err =>{
                    console.log(err)
                    return res.send("<h1> Some thing went Worng </h1>")
                })
            }
            else{
                courseModel.find({},(err,course)=>{
                    if (err) {
                        res.send("Some thing went wrong")
                    }
                    else{
                         video_model.find({course: req.body.Course_selected},(err,result)=>{
                             if (err) {
                                 console.log(err)
                                 res.render("Some thing went wrong")
                             }
                             else{
                                 console.log(result)
                                 if (result.length == 0) {
                                     res.send("<h1>Videos are not available</h1>")
                                 }
                                 else{
                                    res.render('VideoPlayer-Downloader',{video : result ,course: course, user: req.cookies.user, jwt:req.cookies.jwt  })
                                 }
                                
                             }
                         })

                        
                    }
                })
            }
            
            
            
           
        },
         downlaod(req,res){
            var downlaod_id = req.body.downloadId
            
             pdf_model.findById(downlaod_id).then(result =>{
                 console.log(result.FileName)
                res.download('G:/Projects/Under Development/EduCon/public/pdf/'+result.FileName,function(err){
                    console.log(err)
                 })
            }).catch(err =>{
                console.log(err)
            })
            
        },
        PlayVideo(req,res){
            var downlaod_id = req.body.downloadId
            
            video_model.findById(downlaod_id).then(result =>{
                console.log(result.videoName)
               res.download('G:/Projects/Under Development/EduCon/public/video/'+result.videoName,function(err){
                   console.log(err)
                })
           }).catch(err =>{
               console.log(err)
           })
        }
    }
}
module.exports = downloadController