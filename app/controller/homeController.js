const course_Model = require('../models/Course')
function homeController(){
    return {
        index(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('home',{course:course})
                }
                
            })
            
        }
    }
}

module.exports = homeController