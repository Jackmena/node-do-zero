const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
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

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Teste',
            comments: 3,
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste',
            comments: 3,
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste',
            comments: 3,
        }
    ]
    res.render('blog', { posts })
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