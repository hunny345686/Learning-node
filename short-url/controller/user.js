const User = require("../models/user")
const { setUser } = require("../utils/auth")

async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body

    await User.create({
        name, email, password
    })
    return res.redirect("/")
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({
        email, password
    })
    if (!user) return res.render("login", { error: "Invalid username and pass" })

    const token = setUser(user)
    res.cookie("token", token)
    return res.redirect("/")
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}