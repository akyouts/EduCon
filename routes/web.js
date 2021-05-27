
const homeController = require('../app/controller/homeController')
const downloadController = require('../app/controller/download-Controller')
const UploadController = require('../app/controller/Upload-Controller')
const upload = require('../app/config/multerStorage')
const authController = require('../app/controller/authController')
const authChecker = require('../app/middleware/authChecker')
const teacherChecker = require('../app/middleware/teacherChecker')
const loginChecker = require('../app/middleware/loginchecker')
const uploadVideo = require('../app/config/videoUploadmulterConfig')



function initroutes(app)
{

    //All get requests 
    app.get('/', homeController().index)
    
    app.get('/upload',teacherChecker,UploadController().index)
    app.get('/courseornote',teacherChecker,UploadController().courseORnote)
    app.get('/uploadCourse',teacherChecker,UploadController().uploadCourse)
    app.get('/uploadVideo',teacherChecker,UploadController().getUploadVideo)
    app.get('/login',loginChecker,authController().loginIndex)
    app.get('/register',loginChecker,authController().registerIndex)
    app.get('/logOut',authController().logOut)

    
    // ALL post request
    app.post('/download-section',authChecker,downloadController().index)
    app.post('/download',authChecker,downloadController().downlaod)
    app.post('/uploadPDF',teacherChecker,upload,UploadController().upload)
    app.post('/uploadCourse',teacherChecker,UploadController().uploadNewCourse)
    app.post('/uploadVideo',teacherChecker,uploadVideo,UploadController().video)
    app.post('/login',loginChecker,authController().loginPost)
    app.post('/register',loginChecker,authController().RegisterPost)
    

}

module.exports = initroutes