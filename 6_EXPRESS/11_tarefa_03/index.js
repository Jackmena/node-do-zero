const express = require('express')
const app = express()
const port = 5000
const path = require('path')

const pagesRouter = require('./router')

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.use('/', pagesRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})