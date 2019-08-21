const user = require('./user')
const article = require('./article')
const serie = require('./series')

module.exports = (router) => {
    user(router)
    article(router)
    serie(router)
}