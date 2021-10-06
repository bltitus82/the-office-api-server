const router = require('express').Router()
const { Episodes, Quotes, Characters, Profile } = require('../models/index')
const validateJWT = require('../middleware/jwt-validation')
const { likes } = require('../controllers/likes')
const { restart } = require('nodemon')

// view a random quote
router.get('/', async (req, res) => {
    try{
        const quote = await Quotes.findAll();
        const result = quote[Math.floor(Math.random() * quote.length)]
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
// submit a quote for approval
router.post('/submit', async (req, res) => {
    const { quote, characterId, episodeId, likes, public } = req.body.Quote;
    const newQuote = {
        quote,
        likes,
        public, 
        characterId, 
        episodeId
    }
    try {
        const result = await Quote.create(newQuote);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err })
    }
});

// view quotes to be approved
router.get('/approve', [validateJWT, validateAdmin], async(req, res) => {
    try {
        const quotes = await Quote.findAll({ where: { public: false } });
        res.status(200).json(quotes); 
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// edit Quote
router.put('/:id', [validateJWT, validateAdmin], async(req, res) => {
    const { quote, characterId, episodeId, likes, public } = req.body.Quote;
    const updateQuote = {
        quote,
        likes,
        public,
        characterId,
        episodeId
    }
    const quoteId = req.params.id;
    try {
        const result = await Quote.update(updateQuote, { where: { id: quoteId } })
        res.status(200).json(quotes);
    } catch (err) {
        res.status(500).json({ error: err })
    }
}) 

// get a random quote from a specific character

router.get('/characters/:cid', async (req, res) => {
    try{
        const character = await Quotes.findAll({ where: {characterId: req.params.cid} })
        const quotes = character[Math.floor(Math.random() * character.length)]
        res.json(quotes)
    } catch (err) {
        res.json({ error: err })
    }
}) 

// add a like to the quote counter

router.put('/:id', validateJWT, async (req, res) => {
    try{
        await Quotes.update({
            likes: req.body.quotes.likes},
            {where: {id: req.params.id}}
        )
        res.status(200).json({
            message: "Success"
        }) 
    } catch (err) {
        res.status(500).json({
            message: `Like failed, ${err}`
        })
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

module.exports = router;