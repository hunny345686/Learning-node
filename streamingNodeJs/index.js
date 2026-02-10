import express from "express";
import fs from "node:fs"
import status from "express-status-monitor"


const app = express()
app.use(status())


app.get("/", (req, res) => {
    const st = fs.createReadStream("./data.txt", "utf-8")
    st.on("data", (chunk) => { res.write(chunk) })
    st.on("end", () => { res.end() })
})

app.listen(5000, () => {
    console.log("connect")
})