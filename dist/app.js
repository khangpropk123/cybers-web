/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const path = require('path')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
//const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium"
const url ="mongodb+srv://dbmedium:dbPassword@cluster0-byup4.mongodb.net/test?retryWrites=true&w=majority"

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'uitiititc',
    api_key: '194386728788554',
    api_secret: 'yMzmB3ntSm7R9xBd1M_tjubFUo0'
})

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })   
    console.log("Okieee")
} catch (error) {
    console.log(error)
}

let port = process.env.PORT || 5000

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/static',express.static(path.join(__dirname,'static')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/assets',express.static(path.join(__dirname,'assets')))

app.use('/api', router)
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});