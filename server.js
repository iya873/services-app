const express = require('express')
const app = express()
const port = 8000

const serviceData = require('./models/services')
//set view engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send('Welcome to Services by Sweet Ambiance!')
})

app.get('/services', (req, res) => {
    res.render('Index', {Services: serviceData})
})
//show routes for each category
app.get('/services/face', (req, res) => {
    res.render('showFace')
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
    res.render('BookMe')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})