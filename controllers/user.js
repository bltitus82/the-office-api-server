const router = require('express').Router()
const { User } = require('../models/index')
const {UniqueConstraintError} = require('sequelize/lib/errors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// router.post('/register', async (req, res) => {
//     try {
//         const results = await User.create({
//             email: req.body.user.email,
//             password: req.body.user.password
//         })
//         res.json(results)
//     } catch (err) {
//         res.json({ error: err })
//     }
// })

// User Registration Endpoint
router.post('/register', async (req, res) => { 
    let { email, password, userName } = req.body.user;    
        try{
            const newUser = await User.create({
                email,
                password: bcrypt.hashSync(password, 17),
                userName,
                userBio: '',
                imageURL: '',
                admin: false
            });

            let token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

            res.status(201).json({
                message: "Registration successful!",
                email: email,
                sessionToken: token,
                User: newUser.id
            })
        } catch (err) {
            if (err instanceof UniqueConstraintError) {
                res.status(409).json({
                    message: "An account already exists with this email address. Please log in.",
                });
            } else {
                res.status(500).json({
                    message: `[error]: "Registration unsuccessful." ${err}`
                });
            }
        }
    })

    // User Login Endpoint
    router.post('/login', async (req, res) => {

        let { email, password } = req.body.user;

        try{
            const verifiedUser = await User.findOne({
                where: {
                    email: email
                }
            });

            if (verifiedUser) {
                let verifiedPassword = await bcrypt.compare(password, verifiedUser.password);

                if (verifiedPassword) {
                    let token = jwt.sign({ id: verifiedUser.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});

                    res.status(201).json({
                        message: `Welcome, ${verifiedUser.userName}.`,
                        user: verifiedUser,
                        sessionToken: token
                    })
                } else {
                    res.status(401).json({
                        message: "Login Failed: Incorrect email address or password."
                    });
                }
            } else {
                res.status(401).json({
                    message: "Login Failed: Incorrect email address or password."
                });
            }
        } catch (err) {
            res.status(500).json({
                message: `[error]: "There's an error logging in." ${err}`
            })
        }
    });

    router.get('/:id', async(req, res) => {
        try{
            const one = await User.findOne({ where: { id: req.params.id }})
            res.json(one)
        } catch (err) {
            res.json({ error: err })
        }
    })
    
    //view all users
    router.get('/all', async(req, res) => {
        try{
            const result = await User.findAll()
            res.json(result)
        } catch (err) {
            res.json({ error: err })
        }
    })
    
    //update user 
    router.put('/', async (req, res) => {
            const imageURL = null; // Come back to this
    
        try {
    
            await User.update({
                userBio: req.body.user.userBio}, 
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
    
    // delete a user
    router.delete('/:id', async (req, res) => {
        try {
            const user = await User.findOne({ where: {id: req.params.pid}})
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