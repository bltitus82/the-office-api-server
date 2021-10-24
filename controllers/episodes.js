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

// get list of an entire season
router.get('/season/:sid', async (req, res) => {
    try {
        const season = await Episodes.findAll({where: {season: req.params.sid}})
        res.json(season)
    } catch (err) {
        res.json({ error: err })
    }
})

// get list of all seasons
router.get('/', async (req, res) => {
    try {
        const allEpisodes = await Episodes.findAll({})
        res.json(allEpisodes)
    } catch (err) {
        res.json({ error: err })
    }
})

// view random quotes from a specific episode

router.get('/:eid/quotes/', async (req, res) => {
    try{
        const quote = await Quotes.findAll({ where: {episodeId: req.params.eid}})
        const result = quote[Math.floor(Math.random() * quote.length)]
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})



module.exports = router;