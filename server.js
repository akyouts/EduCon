const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const mongoose_connection_string = 'mongodb://localhost:27017/educon'
const bodyParser = require('body-parser')
require('dotenv').config
const cookieParser = require('cookie-parser')

app.use(cookieParser());




app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')
app.set('views','G:/Projects/Under Development/EduCon/resourses/views')


mongoose.connect(mongoose_connection_string,{ useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



require('./routes/web')(app)


app.get('/secrets',(req,res)=>{
    console.log(req.cookies)
    res.send("We are sending data")
})





db.once('open', function() {
    app.listen(port,()=>{
        console.log("Server is listing on port 3000 and database is connected")
    })
  });