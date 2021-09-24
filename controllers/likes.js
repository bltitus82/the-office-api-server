const router = require('express').Router()
const { userC, likesC } = require('.')
const { Quotes, Profile } = require('../models/index')

// view quotes that a user has liked
router.get('/profile/:pid/likes', async (req, res) => {
    try{
        const profile = await Profile.findOne({ where: {id: req.params.pid} })
        const result = await Quotes.findAll({ where: {id: likesC.liker.`${profile}[0].id`} })
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

// add a like
router.post('/profile/:pid/quote/:qid', async (req, res) => {
    try{
        const profile = await Profile.findOne({ where: {id: req.params.pid}})
        const quote = await Quotes.findOne({ where: {id: req.params.did}})
        const result = await profile.addLikee(quote)
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

// delete a like
router.delete('/profile/:pid/quote/:qid', async (req, res) => {
    try{
        const profile = await Profile.findOne({ where: {id: req.params.pid}})
        const result = await profile.removeLikee(req.params.qid)
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

module.exports = router;