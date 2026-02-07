import express from "express"
import http from "node:http"
import path from "node:path"
import { Server } from "socket.io"

const app = express()

const server = http.createServer(app)
const io = new Server(server)

// Socket IO Handlijng

io.on("connection", (client) => {
    client.on("msg", msg => {
        console.log("User Send Msg", msg)
        io.emit("msg", msg)
    })
})

app.use(express.static(path.resolve("./public")))

app.get("/", (req, res) => {
    res.sendFile(". /public/index.html")
})


server.listen(2000, () => {
    console.log("running")
})