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
    },
    genToken: (id)=>{
        var payload = {_id:id}
        var jwtToken = jwt.sign(payload, "my_fucking_secret_string", { expiresIn: '30 days' });
        var jsonResponse = {'access_token': jwtToken}
        return jsonResponse
    }
}
