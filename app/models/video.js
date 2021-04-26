const mongoose = require('mongoose')

var videoSchema = new mongoose.Schema({
    videoName : {type:String , required : true, unique:true},
    videoEmbeddingCode : {type:String , required : true, unique:true},
    course: {type:String, require: true}
},{timestamps:true})
 
module.exports = mongoose.model('video',videoSchema)
