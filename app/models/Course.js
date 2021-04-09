const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    Course : {type:String , require:true }
},{timestamps:true})

module.exports = mongoose.model('course',Schema)
