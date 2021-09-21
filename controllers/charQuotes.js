const router = require('express').Router()
const { Quotes, Characters } = require('../models/index')

// get a random quote from a specific character

router.get('/characters/:cid/', async (req, res) => {
    try{
        const character = await Characters.findOne({ where: {id: req.params.cid}})
        const quotes = await character.getQuotes({ where: {id: /*randomizer*/ }})
        res.json(quotes)
    } catch (err) {
        res.json({ error: err })
    }
}) 


module.exports = router;