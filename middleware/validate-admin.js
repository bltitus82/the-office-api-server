const validateAdmin = async(req, res, next) => {
    const { admin } = req.member
    if(isAdmin === false) {
        res.status(401).send({ message: 'Not Authorized' });
    } else {
        next();
    }
}

module.exports = validateAdmin;