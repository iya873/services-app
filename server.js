const express = require('express')
const app = express()
const port = 8000


app.get('/', (req, res) => {
    res.send('Welcome to Services by Sweet Ambiance!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})