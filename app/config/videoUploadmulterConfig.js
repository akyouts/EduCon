const multer = require('multer')
const path = require('path')
const maxsize = 50 * 1024 * 1024 * 1024

const storage = multer.diskStorage({
    destination : 'G:/Projects/Under Development/EduCon/public/video',
    filename : (req,file,cb)=>{
        var storageName = file.originalname 

        cb(null,storageName.split(" ").join(""))
    }
})

const upload = multer({
   
fileFilter : (req,file,cb)=>{
    var mimeType = file.mimetype
    var allowedMimeType = 'video/mp4'
    if (mimeType == allowedMimeType)
    cb(null,true)
    else{
        cb(new Error('Please Upload only mp4 file'),false)
        
    }
}, storage: storage,
limits : {fileSize:maxsize}
}).single('video')

module.exports = upload