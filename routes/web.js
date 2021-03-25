const homeController = require('../app/controller/homeController')

function initroutes(app)
{
    app.get('/', homeController().index)

}

module.exports = initroutes