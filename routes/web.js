const homeController = require('../app/controller/homeController')
const downloadController = require('../app/controller/download-Controller')

function initroutes(app)
{
    app.get('/', homeController().index)
    app.get('/download-section',downloadController().index)
    app.get('/download-section/download',downloadController().downlaod)

}

module.exports = initroutes