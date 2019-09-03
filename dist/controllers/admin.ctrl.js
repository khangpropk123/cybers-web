const User = require('./../models/User')
const Article = require('./../models/Article')
const PonitCtrl = require('./point.ctrl')
const MiddleWare = require('./../middlewares/middlewares')

module.exports = {
    setPermit : (req,res)=>{
        let {token,user_id}=req.body
        console.log(req.body)
        let auth = MiddleWare.withAuth(token)
        if(auth=true){
            User.findById(user_id).then(user=>{
                return user.setPermission().then(status=>{
                    return res.json(status.post_permission)
                })
            })
        }
        else{
            res.sendStatus(401)
        }
    },
    getAllUser:  (req,res)=> {
        User.find({},{name:1,email:1,point:1,provider_pic:1,post_permission:1}).then((result)=>{
            console.log(result)
            res.json(result)
           
        })
    },
    getAllUsers:  (req,res)=> {
        User.find({}).then((result)=>{
            console.log(result)
            res.json(result)
        })
    }
}