const express = require('express')
const app = express()
const port = 8000

const services = require('./models/services')


app.get('/', (req, res) => {
    res.send('Welcome to Services by Sweet Ambiance!')
})

app.get('/services', (req, res) => {
    res.send(services)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})