import culster from "node:cluster"
import os from "node:os"
import express from "express";


const cpus = os.cpus().length

if (culster.isPrimary) {
    for (let i = 0; i < cpus; i++) {
        culster.fork()
    }
} else {
    const app = express()
    app.get("/", (req, res) => {
        return res.json(`hello from serwe ${process.pid}`)
    })
    app.listen(5000, () => {
        console.log("connect")
    })
}
