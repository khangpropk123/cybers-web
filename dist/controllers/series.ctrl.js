const multipart = require('connect-multiparty')
const SeriesArticle = require('./../models/Series')
const Article = require('./../models/Article')
const config = require('../settings/configs')
const jwt = require('jsonwebtoken')
const secret = config.secret


module.exports = {
    addSerie: (req, res, next) => {
        console.log(req.body)
        // jwt.verify(req.params.token, config.secret, (err, decoded) => {
        //     if (!err) {
        //         let serie = {
        //             name: req.params.name,
        //             title: req.params.title,
        //             author: decoded._id,
        //             decription:req.params.decription,
        //         }
        //         SeriesArticle(serie).save((err, result) => {
        //             if (!err)
        //                 res.send(result)
        //             console.log(result)
        //         })
        //     } else {
        //         res.json(config.err_mess)
        //     }
        // })

    },
    addArticle: (req, res, next) => {
        console.log(req.params)
        jwt.verify(req.params.token, config.secret, (err, decoded) => {
            if (!err) {
                SeriesArticle.findById(req.params.id)
                    .then((serie) => {
                            return serie.add(req.params.article_id).then((serie) => {
                               return Article.findById(req.params.article_id).then((article)=>{
                                    return article.setSeries(serie._id).then(result => {
                                        res.json(serie)
                                        console.log(result)
                                    })
                                })
                                })
                    })
            } else {
                res.send(401)
            }
        })

    },
    getAuthorSerie: (req, res, next) => {
        jwt.verify(req.params.token, config.secret, (err, decoded) => {
            if (!err) {
                SeriesArticle.find({
                        author: decoded._id
                    })
                    .then((series) => {
                        res.json(series)
                        next()
                    })
            } else
                res.send(401)
        })

    },
    getFull: async (req, res, next) => {
        await SeriesArticle.findById(req.params.id)
            .populate('author')
            .populate('series')
            .exec((err, series) => {
                res.json(series)
                //console.log(series)
            })
    },
    getAll: async (req,res,next)=>{
        await SeriesArticle.find({})
        .populate('author')
        .exec((err, series) => {
            res.json(series)
           // console.log(series)
        })
    }
}