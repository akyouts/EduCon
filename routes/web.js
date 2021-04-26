
const homeController = require('../app/controller/homeController')
const downloadController = require('../app/controller/download-Controller')
const UploadController = require('../app/controller/Upload-Controller')
const upload = require('../app/config/multerStorage')
const multer = require('multer')


function initroutes(app)
{

    //All get requests 
    app.get('/', homeController().index)
    
    app.get('/upload',UploadController().index)
    app.get('/courseornote',UploadController().courseORnote)
    app.get('/uploadCourse',UploadController().uploadCourse)
    app.get('/uploadVideo',UploadController().getUploadVideo)
     
    
    // ALL post request
    app.post('/download-section',downloadController().index)
    app.post('/download',downloadController().downlaod)
    app.post('/uploadPDF',upload,UploadController().upload)
    app.post('/uploadCourse',UploadController().uploadNewCourse)
    app.post('/uploadVideo',UploadController().video)
}

module.exports = initroutes