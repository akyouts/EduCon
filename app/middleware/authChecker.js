function authChecker(req,res,next){
    if (req.cookies.jwt)
    {
        res.send("alredy login")
    }
    else{
        res.redirect('/login')
    }
}

module.exports = authChecker