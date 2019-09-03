const User = require('./../models/User')

module.exports = {
    getAllUser:  (req,res)=> {
        User.find({},{name:1,email:1,point:1,provider_pic:1,post_permission:1}).then((result)=>{
            console.log(result)
            res.json(result)
           
        })
    }
}