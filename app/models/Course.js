const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
    Course : {type:String ,unique:true, require:true}
},{timestamps:true})

module.exports = mongoose.model('course',Schema)
