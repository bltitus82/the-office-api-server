const router = require('express').Router()
const { Episodes, Quotes, Characters, Profile } = require('../models/index')

//view all characters in database

router.get('/all', async (req, res) => {
    try {
        const all = await Characters.findAll()
        res.json(all)
    } catch (error) {
        res.json({ error })
    }
})

//view a specific character
router.get('/:id', async (req, res) => {
    try {
        const result = await Characters.findOne({ where: { id: req.params.id }})
        res.json(result)
    } catch (err) {
        res.json({ error: err })
    }
})


module.exports = router;