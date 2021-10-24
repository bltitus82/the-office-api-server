const validateAdmin = async(req, res, next) => {
    const { admin } = req.User
    if(admin === false) {
        res.status(401).send({ message: 'Not Authorized' });
    } else {
        next();
    }
}

module.exports = validateAdmin;