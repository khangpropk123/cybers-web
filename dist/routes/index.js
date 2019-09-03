const user = require('./user')
const article = require('./article')
const serie = require('./series')
const admin = require('./admin')
const mobile = require('./mobile')

module.exports = (router) => {
    admin(router)
    user(router)
    article(router)
    serie(router)
    mobile(router)
}