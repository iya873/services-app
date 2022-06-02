require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb')
const client = new MongoClient(process.env.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const port = 8000

const serviceData = require('./models/services')
const faceData = require('./models/faceServ')
const bodyData = require('./models/bodyServ')
const waxData = require('./models/waxServ')
const proData = require('./models/productImg')
//set view engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


mongoose.connect(process.env.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('Connected to database')
})
client.connect(err => {
    const collection = client.db("appointments").collection("booking");
    // perform actions on the collection object
    client.close();
  })
//parse requests of app/form urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
//parse requests of app/json type
app.use(bodyParser.json())
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
    res.render('showBody', {bodyServ: bodyData})
})
app.get('/services/waxing', (req, res) => {
    res.render('showWaxing', {waxServ: waxData})
})
app.get('/services/products', (req, res) => {
    res.render('showProducts', {products: proData})
})

app.get('/services/bookMe', (req, res) => {
    res.render('BookMe', { faceServ: faceData, bodyServ: bodyData, waxServ: waxData})
})

app.get('/services/allBookings', (req, res) => {
    res.render('allBookings')
})
app.post('/services/bookMe', (req, res) => {
    res.redirect('allBookings')
})
app.get('/services/bookMe/edit', (req, res) => {
    res.render('Change')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})