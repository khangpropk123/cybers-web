const multipart = require('connect-multiparty')
const multipartWare = multipart()
const adminctrl = require('./../controllers/admin.ctrl')
module.exports = (router)=>{
    router
        .route('/set-post-permission')
        .post(multipartWare,adminctrl.setPermit)
    router
        .route('/app-login')
        .post(multipartWare,adminctrl.loginApp)
    
    router
        .route('/app-get-all-user')
        .post(multipartWare,adminctrl.getAllUser)
    router
        .route('/app-get-ram')
        .get(adminctrl.ramMonitor)
    router
        .route('/app-get-cpu')
        .get(adminctrl.cpuMonitor)
}