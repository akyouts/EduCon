
const jwt = require('jsonwebtoken')
const user = require('../models/user')

function authChecker(req,res,next){
    if (req.cookies.jwt) 
    {
        token = req.cookies.jwt
        try{
            const verify = jwt.verify(token,process.env.jwtKey)
            user.find({_id:verify.id}).then(result=>{
                if(req.cookies.user === result[0].Name && result[0].role === 'teacher'){
                    next()
                }
                else{
                    console.log(3)
                    
                    res.send('Un Authorized Access')
                }
            })
            
          
           
           
        }
        catch(e){
            console.log(2)
            res.clearCookie('jwt').clearCookie('user').redirect('/login')
       
        }
        
    }
    else{
        console.log(1)
        res.redirect('/login')
    }
}

module.exports = authChecker