require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 8000

const serviceData = require('./models/services')
const faceData = require('./models/faceServ')
const bodyData = require('./models/bodyServ')
const waxData= require('./models/waxServ')
//set view engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
mongoose.connect(process.env.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('Connected to database')
})

app.get('/', (req, res) => {
    res.send('Welcome to Services by Sweet Ambiance!')
})

app.get('/services', (req, res) => {
    res.render('Index', {Services: serviceData})
})
//show routes for each category
app.get('/services/face', (req, res) => {
    res.render('showFace', {faceServ: faceData})
})
app.get('/services/body', (req, res) => {
    res.render('showBody')
})
app.get('/services/waxing', (req, res) => {
    res.render('showWaxing')
})
app.get('/services/products', (req, res) => {
    res.render('showProducts')
})

app.get('/services/bookMe', (req, res) => {
    res.render('BookMe', { faceServ: faceData, bodyServ: bodyData, waxServ: waxData})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})