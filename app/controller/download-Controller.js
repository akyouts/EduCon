const pdf_model = require('../models/pdf') 
const courseModel = require('../models/Course')


function downloadController(){
    return {
        async index(req,res){
            var course = courseModel.find({Course:'BBA'})
            await pdf_model.find({ Course: 'BBA'}).then(result =>{
                res.render('notes',{ file: result })
            }).catch(err =>{
                console.log(err)
                return res.send("<h1> Some thing went Worng </h1>")
            })
            
           
        },
         downlaod(req,res){
            var downlaod_id = req.body.downloadId
             pdf_model.findById(downlaod_id).then(result =>{
                res.download('G:/Projects/Under Development/EduCon/public/pdf/Sample.pdf',function(err){
                    console.log(err)
                 })
            }).catch(err =>{
                console.log(err)
            })
            
        }
    }
}
module.exports = downloadController