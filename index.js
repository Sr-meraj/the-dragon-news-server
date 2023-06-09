const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('The Dragon News Server.')
})

app.get('/categories', (req, res) => {
    res.send(categories)
    console.log(categories);
})

app.listen(port, () => {
    console.log('The Dragon News Server Running on Port:', port);
})