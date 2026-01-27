const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req,res)=>{
    if(req.url =="/favicon.ico"){
       return res.end()
    }
    const myUrl = url.parse(req.url)
    console.log(myUrl)

    const log = `${Date.now()} New Req recieved on ${req.url} URL\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Logs are Genrated",data)

    })
    
})


myServer.listen(2000, ()=>{
    console.log("Server is runnuing on 2000")
})