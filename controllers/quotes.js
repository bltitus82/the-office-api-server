const router = require('express').Router()
const { Episodes, Quotes, Characters, Profile } = require('../models/index')
const { likes } = require('../controllers/likes')

// view a random quote
router.get('/random', async (req, res) => {
    try{
        const result = await Quotes[Math.floor(Math.random() * Quotes.length)];
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

// view a specific quote
router.get('/:id', async (req, res) => {
    try {
        const result = await Quotes.findOne({ where: {id: req.params.id} })
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

// get a random quote from a specific character

router.get('/characters/:cid', async (req, res) => {
    try{
        const character = await Characters.findOne({ where: {id: req.params.cid} })
        const quotes = character[Math.floor(Math.random() * character.length)]
        res.json(quotes)
    } catch (err) {
        res.json({ error: err })
    }
}) 


// view most-liked quote
// router.get('/trending', async (req, res) => {
//     try{
//         const quote = await Quotes.findAll();
//         const mostLiked = Math.max(...quote.map(o => o.y), 0);
//         const result = await 
//     }
// })