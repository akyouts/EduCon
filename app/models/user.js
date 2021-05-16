const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Name: {type: String, required:true },
    Email : {type: String, required:true ,unique: true},
    Password : {type: String, required:true},
    role : {type: String, default:"Student"},
    Subscription : { type: Boolean , default: false },
    Gender : { type: String , required: true}
    
},{timestamps:true})

module.exports = mongoose.model('user',Schema)

