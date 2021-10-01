const router = require('express').Router()
const { userC, likesC } = require('.')
const { Quotes, Profile, Likes } = require('../models/index')
const validateJWT = require('../middleware/jwt-validation')

// view quotes that a user has liked
router.get('/profile/:pid', validateJWT, async (req, res) => {
    try{
        const result = await Likes.findAll({where: {profileId: req.params.pid}})
        res.json(result)
    } catch (err) {
        res.json({ error: err })
        console.log(err)
    }
})

// add a like
router.post('/profile/:pid/quote/:qid', validateJWT, async (req, res) => {
    try{
        const profile = await Profile.findOne({ where: {id: req.params.pid}})
        const quote = await Quotes.findOne({ where: {id: req.params.qid}})
        const result = await profile.addLikee(quote)    
        res.json(result)
    } catch (err) {
        res.json({ error: err })
        console.log(err)
    }
})

// delete a like
router.delete('/profile/:pid/quote/:qid', validateJWT, async (req, res) => {
    try{
        const profile = await Profile.findOne({ where: {id: req.params.pid}})
        const result = await profile.removeLikee(req.params.qid)
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

module.exports = router;