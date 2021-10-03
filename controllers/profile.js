const router = require('express').Router()
const { User, Profile } = require('../models/index')
const validateJWT = require('../middleware/jwt-validation')
const { restart } = require('nodemon')
// const validateJWT = require('../middleware/jwt-validation');

//view a users profile
router.get('/:id', validateJWT, async(req, res) => {
    try{
        const one = await Profile.findOne({ where: { id: req.params.id }})
        res.json(one)
    } catch (err) {
        res.json({ error: err })
    }
})

//view a profile by UserID
router.get('/user/:id', validateJWT, async (req, res) => {
    try{
        const result = await Profile.findOne({ where: {userId: req.params.id}})
        res.json(result)
    } catch (err) {
        res.json({ error: err })
        console.log(err)
    }
})

//view all users
router.get('/all', validateJWT, async(req, res) => {
    try{
        const result = await Profile.findAll()
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})

//create a user profile
router.post('/', validateJWT, async (req, res) => {
    try {
        const result = await Profile.create({
            userName: req.body.profile.userName,
            userBio: null,
            imageURL: null,
            admin: false,
            userId: req.body.userId
        })
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    } 
})

//update user profile
router.put('/', validateJWT, async (req, res) => {
        const imageURL = null; // Come back to this

    try {

        await Profile.update({
            userBio: req.body.profile.userBio}, 
            {where: {userId: req.User.id}}
        )
        res.status(200).json({
            message: "User profile updated."
        }) 
    } catch (err) {
        res.status(500).json({
            message: `Update failed, ${err}`
    })
}
})

// delete a user and profile
router.delete('/:id', validateJWT, async (req, res) => {
    try {
        const profile = await Profile.findOne({ where: {id: req.params.pid}})
        const user = await User.findOne({ where: {id: profile.userId}})
        const result = await user.delete
        res.status(200).json({
            message: "User account deleted."
        })
    } catch (err) {
        res.status(500).json({
            message: `User account delete failed, ${err}`
        })
    }
})

module.exports = router;