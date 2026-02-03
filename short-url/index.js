const express = require("express")
const cokkieParser = require("cookie-parser")
const path = require("path")

const { connectDB } = require("./connect")
const URL = require("./models/url")



const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user")
const { ristrictTologinUser } = require("./middelwares/auth")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cokkieParser())
connectDB().then(() => {
    console.log("Connect to db")
})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


app.use("/url", ristrictTologinUser, urlRoute)
app.use("/", staticRoute)
app.use("/user", userRoute)



app.listen(9000, () => {
    console.log("connected")
})