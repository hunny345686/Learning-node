const express = require("express")
const path = require("path")

const urlRoute = require("./routes/url")
const staticRoute = require("./routes/staticRouter")
const { connectDB } = require("./connect")
const URL = require("./models/url")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDB().then(()=>{
    console.log("Connect to db")
})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

    
app.use("/url",urlRoute)
app.use("/",staticRoute)

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