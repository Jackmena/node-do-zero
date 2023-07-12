const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const products = [
        {
            title: 'one',
            price: 'R$ 1,00',
            category: 'info',
            description: 'Alta qualidade',
        },
        {
            title: 'two',
            price: 'R$ 2,00',
            category: 'info',
            description: 'Alta qualidade',
        },
        {
            title: 'three',
            price: 'R$ 3,00',
            category: 'info',
            description: 'Alta qualidade',
        },
    ]
    res.render('home', { products })
})

module.exports = router