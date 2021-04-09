const homeController = require('../app/controller/homeController')
const downloadController = require('../app/controller/download-Controller')
const UploadController = require('../app/controller/Upload-Controller')
const multer = require('multer')
const upload = multer({dest: 'G:/Projects/Under Development/EduCon/public/pdf'})

function initroutes(app)
{

    //All get requests 
    app.get('/', homeController().index)
    app.get('/download-section',downloadController().index)
    
    app.get('/upload',UploadController().index)
     
    
    // ALL post request
    app.post('/download',downloadController().downlaod)
    app.post('/uploadPDF',upload.single('pdf'),UploadController().upload)
}

module.exports = initroutes