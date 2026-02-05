import express from "express";
import { User } from "../models/user.js";

const router = express.Router()



router.get("/singup", (req, res) => {
    return res.render("singup")
})

router.post("/singup", async (req, res) => {
    const { fullname, email, password } = req.body

    const user = await User.create({
        fullname, email, password
    })

    res.redirect("/")
})


router.get("/singin", (req, res) => {
    return res.render("singin")
})
router.post("/singin", async (req, res) => {
    const { email, password } = req.body
    try {
        const token = await User.matchPasswordAndGenrateToken(email, password)
        return res.cookie("token", token).redirect("/")
    } catch (error) {
        res.render("singin", {
            err: "incorrect curdentails"
        })
    }
})

router.get("/logout", (req, res) => {
    return res.clearCookie("token").redirect("/")
})

export default router;




