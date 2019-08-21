const seriecontroller = require('./../controllers/series.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()


module.exports = (router) => {
    router
        .route('/add-serie/')
        .post(multipartWare,seriecontroller.addSerie)
    router
        .route('/add-article-to-serie/:id/:article_id/:token')
        .post(multipartWare,seriecontroller.addArticle)    
    router
        .route('/get-author-series/:token')
        .post(seriecontroller.getAuthorSerie)
    router
        .route('/get-full/:id')
        .post(seriecontroller.getFull)
    router
        .route('/get-all/')
        .get(seriecontroller.getAll)
}