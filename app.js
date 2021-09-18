require('dotenv').config();

const Express = require ('express')
const app = Express()

const db = require('./db')

const controllers = require('./controllers/index')

app.use(Express.json())

app.use('/user', controllers.userC)
app.use('/profile', controllers.profileC)
app.use('/characters', controller.charactersC)
app.use('/episodes', controllers.episodesC)
app.use('/quotes', controllers.quotesC)

db.authenticate()
    .then(() => db.sync())
    // .then(() => db.sync({forces: true}))
    .then(() => {
        app.listen(process.env.PORT, console.log(`[server]: listening on localhost:${process.env.PORT}`))
    })
    .catch(err => {
        console.log('{server]: Server Crashed')
        console.log(err)
    })