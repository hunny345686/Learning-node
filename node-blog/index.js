import express from "express"
import path from "node:path"
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://prem:prem@myntra.4mzbesy.mongodb.net/blog')
    .then(() => console.log('Connected!'));

import userRoute from "./routes/user.js"

const app = express()

app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


app.use("/user", userRoute)
app.get("/", (req, res) => {
    res.render("home")
})


app.listen(4000, () => {
    console.log("Server is running on port 4000")
})