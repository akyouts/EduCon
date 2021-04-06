const mongoose = require('mongoose')
var Schema = mongoose.Schema

var pdf_schema = new Schema({
    FileName : {type: String, require: true},
    Address : {type: String, required: true},
    Course: {type: String, required: true }
    
    
},{timestamps: true})

module.exports = mongoose.model('pdf',pdf_schema)