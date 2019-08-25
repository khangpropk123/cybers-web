const multipart = require('connect-multiparty')
const multipartWare = multipart()
const adminctrl = require('./../controllers/admin.ctrl')
module.exports = (router)=>{
    router
        .route('/set-post-permission')
        .post(multipartWare,adminctrl.setPermit)
}