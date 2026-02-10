import express from "express";


const app = express()


app.get("/", (req, res) => {
    return res.json(`hello from serwe ${process.pid}`)
})

app.listen(5000, () => {
    console.log("connect")
})