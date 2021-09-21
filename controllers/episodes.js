const router = require('express').Router()
const { Episodes, Quotes, Characters, Profile } = require('../models/index')

// view details of a specific episode
router.get('/:eid', async (req, res) => {
    try {
    const episode = await Episodes.findOne({ where: {id: req.params.eid}})
    res.json(episode)
    } catch (err) {
        res.json({ error: err })
    }
})


// view random quotes from a specific episode

router.get('/:eid/quotes/', async (rec, res) => {
    try{
        const episode = await Episodes.findOne({ where: {id: req.params.eid}})
        const quote = await Quotes.findOne({where: {id: /* randomizer */ }})
        res.json(quote)
    } catch (err) {
        res.json({ error: err })
    }
})



module.exports = router;