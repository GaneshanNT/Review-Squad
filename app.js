const express = require('express')
const app = express()
const router = require('./router')




// app.use('/assets', express.static('css'));
//  server multiple static files 
app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',router)


// app.set("express object","folder name")
app.set('views', 'views')
app.set('view engine', 'ejs')



module.exports = app;
