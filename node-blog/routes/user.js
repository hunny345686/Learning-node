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
    const user = await User.matchPassword(email, password)
    console.log("user", user)
    res.redirect("/")
})

export default router;




