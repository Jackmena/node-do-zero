const express = require('express')
const exphbs = require('express-handlebars')
const project = require('./router')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use('/', project)

app.listen(5000, () => {
    console.log('App rodando!')
})
