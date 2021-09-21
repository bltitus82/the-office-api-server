const router = require('express').Router()
const { User, Profile } = require('../models/index')
// const validateJWT = require('../middleware/jwt-validation');

//view a users profile
router.get('/:id', async(req, res) => {
    try{
        const one = await Profile.findOne({ where: { id: req.params.id }})
        res.json(one)
    } catch (err) {
        res.json({ error: err })
    }
})

//create a user profile
router.post('/', async (req, res) => {
    try {
        const result = await Profile.create({
            userName: req.body.profile.userName,
            userBio: req.body.profile.userBio,
            imageURL: req.body.profile.imageURL,
            admin: false,
            userId: req.body.userId
        })
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    } 
})


module.exports = router;