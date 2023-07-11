const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {

    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Nde.js...',
        comments: 4,
    }

    res.render('blogpost', { post })
})

app.get('/', (req, res) => {
    const user = {
        name: 'Jackson',
        surname: 'Mena',
        age: 31,
    }

    const auth = false

    const approved = false

    res.render('home', { user: user, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})