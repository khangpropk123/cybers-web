const mongoose = require('mongoose')
let ArticleSeriesSchema = new mongoose.Schema(
    {
        name: String,
        title: String,
        series: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Article'
            }
        ]
    }
)

ArticleSeriesSchema.methods.add = function(article){
    this.series.push(article)
    return this.save()
}

ArticleSeriesSchema.methods.getSeries = function(_id){
    ArticleSeries.find({_id:_id},(result)=>{
        return result
    })
}
ArticleSeriesSchema.method.getAllSeries = function(){
    ArticleSeries.find({}).then((result)=>{return result})
}
module.exports = mongoose.model('ArticleSeries',ArticleSeriesSchema)
