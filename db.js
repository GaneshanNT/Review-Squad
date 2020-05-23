const mongodb = require('mongodb')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

const app = require('./app')
var port  = process.env.PORT || 5000
var connection = app.listen(port,()=>{
    var host = connection.address().address;
    var port = connection.address().port;
    console.log("connected on host " + host + " and port "+port )
})

}).catch(err => {
    console.log('not connected',err)
})