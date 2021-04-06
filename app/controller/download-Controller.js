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
        downlaod(req,res){
            res.download('G:/Projects/Under Development/EduCon/public/pdf/Sample.pdf',function(err){
                console.log(err)
            })
        }
    }
}
module.exports = downloadController