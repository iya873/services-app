const express = require('express')
const app = express()
const port = 8000

const services = require('./models/services')

//set view engine 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to Services by Sweet Ambiance!')
})

app.get('/services', (req, res) => {
    res.render('Index')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})