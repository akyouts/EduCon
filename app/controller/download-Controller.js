const pdf_model = require('../models/pdf') 
const courseModel = require('../models/Course')



function downloadController(){
    return {
        async index(req,res){
            var course = courseModel.find({Course:'BBA'})
            await pdf_model.find({ Course: 'BBA'}).then(result =>{
                courseModel.find({},(err,course)=>{
                    if (err) {
                        res.send("Some thing went wrong")
                    }
                    else{
                        console.log(result)
                        res.render('DownloadNotes',{ file: result , course: course })
                    }
                })
                
            }).catch(err =>{
                console.log(err)
                return res.send("<h1> Some thing went Worng </h1>")
            })
            
           
        },
         downlaod(req,res){
            var downlaod_id = req.body.downloadId
            
             pdf_model.findById(downlaod_id).then(result =>{
                 
                res.download('G:/Projects/Under Development/EduCon/public/pdf/'+result.FileName,function(err){
                    console.log(err)
                 })
            }).catch(err =>{
                console.log(err)
            })
            
        }
    }
}
module.exports = downloadController