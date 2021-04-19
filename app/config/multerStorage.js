const multer = require('multer')
const path = require('path')
const maxsize = 50 * 1024 * 1024

const storage = multer.diskStorage({
    destination : 'G:/Projects/Under Development/EduCon/public/pdf',
    filename : (req,file,cb)=>{
        var storageName = file.originalname 

        cb(null,storageName.split(" ").join(""))
    }
})

const upload = multer({
    storage: storage,
fileFilter : (req,file,cb)=>{
    var mimeType = file.mimetype
    var allowedMimeType = 'application/pdf'
    if (mimeType == allowedMimeType)
    cb(null,true)
    else{
        cb(new Error('Please Upload only image file'),false)
        
    }
},
limits : {fileSize:maxsize}
}).single('pdf')

module.exports = upload