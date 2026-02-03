const jwt = require('jsonwebtoken');
const sercet = "Prem@@#212312"


function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, sercet)

}
function getUser(token) {
    if (!token) return null
    return jwt.verify(token, sercet)
}


module.exports = {
    setUser,
    getUser,

}