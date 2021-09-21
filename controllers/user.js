const router = require('express').Router()
const { User } = require('../models/index')
// const {UniqueConstraintError} = require('sequelize/lib/errors')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

router.post('register', async (req, res) => {
    try {
        const results = await User.create({
            email: req.body.user.email,
            password: req.body.user.password
        })
        res.json(results)
    } catch (err) {
        res.json({ error: err })
    }
})


// // User Registration Endpoint
// router.post('register', async (req, res) => { 
//     let { email, password } = req.body.user;    
//         try{
//             const user = await User.create({
//                 email: req.params.email,
//                 password: bcrypt.hashSync(password, 17)
//             });

//             let token = jwt.sign({id: User.id}, process.env.JWT_SECRET, {expiresIn: '1 day'});

//             res.status(2020).json({
//                 message: "Registration successful!",
//                 user: User,
//                 sessionToken: token
//             })
//         } catch (err) {
//             if (err instanceof UniqueConstraintError) {
//                 res.status(409).json({
//                     message: "An account already exists with this email address. Please log in.",
//                 });
//             } else {
//                 res.status(500).json({
//                     message: "Registration failed.",
//                 });
//             }
//         }
//     })

//     // User Login Endpoint
//     router.post('/login', async (req, res) => {

//         let { email, password } = req.body.user;

//         try{
//             const verifiedUser = await User.findOne({
//                 where: {
//                     email: email
//                 }
//             });

//             if (verifiedUser) {
//                 let verifiedPassword = await bcrypt.compare(password, verifiedUser.password);

//                 if (verifiedPassword) {
//                     let token = jwt.sign({ id: verifiedUser.id}, process.env.JWT_SECRET, {expiresIn: '1 day'});

//                     res.status(201).json({
//                         message: `Welcome, ${verifiedUser.userName}.`,
//                         user: verifiedUser,
//                         sessionToken: token
//                     })
//                 } else {
//                     res.status(401).json({
//                         message: "Login Failed: Incorrect email address or password."
//                     });
//                 }
//             } else {
//                 res.status(401).json({
//                     message: "Login Failed: Incorrect email address or password."
//                 });
//             }
//         } catch (err) {
//             res.status(500).json({
//                 error: "There's an error logging in."
//             })
//         }
//     });

    module.exports = router;