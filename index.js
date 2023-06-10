const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const news = require('./data/news.json');
const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('The Dragon News Server.')
})

app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/category/:id', (req, res) => {
    const category = parseInt(req.params.id)
    if (category === 0) {
        res.send(news)
    } else {
        const filteredNews = news.filter(news => parseInt(news.category_id) === category)
        res.send(filteredNews)
    }
})

app.get('/news/:title', (req, res) => {
    const title = req.params.title
    const newsItem = news.find(item => item.title === title)
    if (newsItem) {
        res.send(newsItem)
    } else {
        res.status(404).send('News item not found')
    }
})

app.listen(port, () => {
    console.log('The Dragon News Server Running on Port:', port);
})