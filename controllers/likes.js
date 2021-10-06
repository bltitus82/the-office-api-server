const router = require('express').Router()
const { userC, likesC } = require('.')
const { Quotes, User, Likes } = require('../models/index')
const validateJWT = require('../middleware/jwt-validation')

// view quotes that a user has liked
router.get('/user/:uid', validateJWT, async (req, res) => {
    try{
        const result = await Likes.findAll({where: {userId: req.params.uid}})
        res.json(result)
    } catch (err) {
        res.json({ error: err })
        console.log(err)
    }
})

// add a like
router.post('/user/:uid/quote/:qid', validateJWT, async (req, res) => {
    try{
        const user = await User.findOne({ where: {id: req.params.uid}})
        const quote = await Quotes.findOne({ where: {id: req.params.qid}})
        const result = await user.addLikee(quote)    
        res.json(result)
    } catch (err) {
        res.json({ error: err })
        console.log(err)
    }
})

// delete a like
router.delete('/user/:uid/quote/:qid', validateJWT, async (req, res) => {
    try{
        const user = await User.findOne({ where: {id: req.params.uid}})
        const result = await user.removeLikee(req.params.qid)
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

module.exports = router;