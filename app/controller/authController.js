const course_Model = require('../models/Course')
const bcrypt = require('bcrypt')
const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()


function authController(req,res){
    return {
        loginIndex(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('login',{course:course})
                }
                
            })
        },
       async loginPost(req,res){
            var email = req.body.email
            var password = req.body.password
            await userModel.findOne({Email: email}).then( async hash=>{
                if (hash){
                    await bcrypt.compare(password,hash.Password).then(result=>{
                        if (result){
                            console.log(process.env.jwtKey)
                            const token = jwt.sign({id: hash._id},process.env.jwtKey)
                            res.cookie("jwt",token,{
                                maxAge: 60000 * 10,
                                httpOnly : true
                                
                            })
                            res.status('201').redirect('/')
                                    
                        }
                        else{
                            res.send("User or Password may be wrong ")
                        }
                    })
                }
                else{
                    res.send("User or Password may be wrong")
                }

            }).catch(err=>{
                console.log(err)
                res.status('500').send('Something Went Wrong')
            })
        },
        registerIndex(req,res){
            course_Model.find({},(err,course)=>{
                if (err) {
                    res.send("Some thing went wrong")
                }
                else{
                    
                    res.render('register',{course:course})
                }
                
            })
        },
        async RegisterPost(req,res){
           var name = req.body.name
           var email = req.body.email
           var password = req.body.password
           var confirmPassword = req.body.confirmPassword
           var gender = req.body.Gender
           await bcrypt.hash(password,10).then(hash=>{
               var userDB = new userModel({
                   Name : name,
                   Email : email,
                   Password : hash,
                   Gender : gender
               })
               userDB.save().then(result=>{
                   res.status('201').redirect('/login')
               }).catch(err=>{
                   console.log(err)
                   res.status('500').send("Something went wrong")
               })
           }).catch(err=>{
               console.log(err)
               res.status('500').send("Some thing went Wrong")
           })
        },
      
    }
}


module.exports = authController