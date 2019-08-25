const jwt = require('jsonwebtoken')
const Series = require('./../models/Series')
const Config = require('./../settings/configs')
module.exports = {
    withAuth: (token)=>{
        return(
            jwt.verify(token,Config.secret,(err,auth)=>{
                if(!err){
                   return auth
                }
                else {
                    return false
                }
            })
        )
    }
}
