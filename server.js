const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const mongoose_connection_string = 'mongodb://0.0.0.0:27017/educon'
const bodyParser = require('body-parser')
require('dotenv').config
const cookieParser = require('cookie-parser')

app.use(cookieParser());




app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')
app.set('views','./resourses/views')


mongoose.connect(mongoose_connection_string).then((res)=>{
    console.log("Database is connected")
})




require('./routes/web')(app)

app.listen(3000,()=>{
    console.log("Server is running ")
})






