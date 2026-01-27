const express = require("express")

const urlRoute = require("./routes/url")
const { connectDB } = require("./connect")
const URL = require("./models/url")

const app = express()

app.use(express.json())

connectDB().then(()=>{
    console.log("Connect to db")
})

app.get("/",()=>{
    console.log("hello")
})

app.use("/url",urlRoute)

app.get("/:shortID",async(req, res)=>{
    const shortID = req.params.shortID;
   const entry = await URL.findOneAndUpdate({
        shortID
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    })

    res.redirect(entry.redirectURL)
})

app.listen(9000,()=>{
    console.log("connected")
})