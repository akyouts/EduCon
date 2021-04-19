
const homeController = require('../app/controller/homeController')
const downloadController = require('../app/controller/download-Controller')
const UploadController = require('../app/controller/Upload-Controller')
const upload = require('../app/config/multerStorage')
const multer = require('multer')


function initroutes(app)
{

    //All get requests 
    app.get('/', homeController().index)
    app.get('/download-section',downloadController().index)
    app.get('/upload',UploadController().index)
    app.get('/courseornote',UploadController().courseORnote)
    app.get('/uploadCourse',UploadController().uploadCourse)
     
    
    // ALL post request
    app.post('/download',downloadController().downlaod)
    app.post('/uploadPDF',upload,UploadController().upload)
    app.post('/uploadCourse',UploadController().uploadNewCourse)
}

module.exports = initroutes