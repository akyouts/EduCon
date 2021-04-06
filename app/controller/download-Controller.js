const pdf_model = require('../models/pdf') 

function downloadController(){
    return {
        async index(req,res){
            await pdf_model.find({ Course: 'BBA'}).then(result =>{
               console.log(result[0])
                res.render('notes',{ file: result[0] })
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