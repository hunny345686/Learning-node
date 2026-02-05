import express from "express"
import path from "node:path"
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";


mongoose.connect('mongodb+srv://prem:prem@myntra.4mzbesy.mongodb.net/blog')
    .then(() => console.log('Connected!'));

import userRoute from "./routes/user.js"
import blogRoute from "./routes/blog.js"
import { checkForAuthCookie } from "./middelwares/authentication.js";
import { Blog } from "./models/blog.js";

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkForAuthCookie("token"))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.static(path.resolve("./public")))


app.use("/user", userRoute)
app.use("/blog", blogRoute)

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({})
    res.render("home", {
        user: req.user,
        blogs: allBlogs
    })
})


app.listen(4000, () => {
    console.log("Server is running on port 4000")
})