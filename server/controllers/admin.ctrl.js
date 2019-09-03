const User = require('./../models/User')
const Article = require('./../models/Article')
const PonitCtrl = require('./point.ctrl')
const MiddleWare = require('./../middlewares/middlewares')
const info = require('systeminformation')
const os = require('os')
const os_uil = require('os-utils')

module.exports = {
    setPermit: (req, res) => {
        let {
            token,
            user_id
        } = req.body
        console.log(req.body)
        let auth = MiddleWare.withAuth(token)
        if (auth = true) {
            User.findById(user_id).then(user => {
                return user.setPermission().then(status => {
                    return res.json(status.post_permission)
                })
            })
        } else {
            res.sendStatus(401)
        }
    },
    loginApp: (req,res)=>{
        console.log(req.body)
        let account = {
            user:'admin',
            password:'password'
        }
        if(req.body.user === account.user && req.body.password === account.password){
            console.log(req.body)
            let resp = {
                status:'Success',
                access_token: MiddleWare.genToken('admin').access_token
            }

            res.json(resp)
        }
        else{
            res.json({status:'Unauthorized',access_token:'not-alow'})
        }
        
    },
    getAllUser:  (req,res)=> {
        User.find({},{name:1,email:1,point:1,provider_pic:1,post_permission:1}).then((result)=>{
            console.log(result)
            res.json(result)
           
        })
    },
    ramMonitor: (req,res)=>{
        let ram = {
            total: os.totalmem()/(1024),
            free: os.freemem()/(1024),
        }
        
     res.json(ram)
        console.log(ram)
    },
    cpuMonitor: (req,res)=>{
        
        os_uil.cpuUsage(v=>{
            
          info.networkStats().then(data=>{
           let netrx= data[0].rx_sec/(8*1024);
           let nettx= data[0].tx_sec/(8*1024);
           if(netrx<=0){
               netrx=0;
           }
           if(nettx<=0){
            nettx=0;
        }
           if(netrx>100){
               netrx=100
           }
           if(nettx>100){
            nettx=100
        }
              
            let cpu= {
                cpu: v * 100,
                ram: 100-((os.freemem()/os.totalmem()) * 100),
                netrx:netrx,
                nettx:nettx
                
            }
            res.json(cpu)
        })
            
        })
    }
}