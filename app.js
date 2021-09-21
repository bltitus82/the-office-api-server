require('dotenv').config();

const Express = require('express')
const app = Express()

const port = 3000

const db = require('./db')

const controllers = require('./controllers/index')

app.use(Express.json())

app.use('/user', controllers.userC)
app.use('/profile', controllers.profileC)
app.use('/characters', controllers.charactersC)
app.use('/episodes', controllers.episodesC)
app.use('/quotes', controllers.quotesC)
app.use('/likes', controllers.likesC)
app.use('/charQuotes', controllers.charQuotesC)

db.authenticate()
    // .then(() => db.sync())
    .then(() => db.sync({force: true}))
    .then(() => {
        app.listen(process.env.PORT, console.log(`[server]: listening on localhost:${process.env.PORT}`))
    })
    .catch(err => {
        console.log('{server]: Server Crashed')
        console.log(err)
    })