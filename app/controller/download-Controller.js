const pdf_model = require('../models/pdf') 


function downloadController(){
    return {
        async index(req,res){
            await pdf_model.find({ Course: 'BBA'}).then(result =>{
                res.render('notes',{ file: result })
            }).catch(err =>{
                console.log(err)
                return res.send("<h1> Some thing went Worng </h1>")
            })
            
           
        },
        async downlaod(req,res){
            var downlaod_id = req.body.downloadId
            res.json({status : "okS"})
            await pdf_model.findById(downlaod_id).then(result =>{
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