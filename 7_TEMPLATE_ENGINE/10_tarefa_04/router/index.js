const express = require('express')
const router = express.Router()

const products = [
    {
        title: 'Xbox One',
        price: 'R$ 1.500,00',
        category: 'Games',
        description: 'Console da Microsoft',
        id: 1,
    },
    {
        title: 'PS5',
        price: 'R$ 3.999,00',
        category: 'Games',
        description: 'Console da Sony',
        id: 2,
    },
    {
        title: 'Nintendo Switch',
        price: 'R$ 2.300,00',
        category: 'Games',
        description: 'Console da Nintendo',
        id: 3,
    },
]

router.get('/itens/:id', (req, res) => {
    const item = products[parseInt(req.params.id) - 1]
    res.render('itens', { item })
})

router.get('/', (req, res) => {
    res.render('home', { products })
})

module.exports = router