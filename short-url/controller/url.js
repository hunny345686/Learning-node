const shortid = require("shortid")
const URL = require("../models/url")
async function handleGenrateNewShortURL(req, res) {
    const body = req.body
    if(!body?.url){
        return res.status(400).json({ msg: "Please add URL" });
    } 
    const shortId = shortid(8)
    await URL.create({
        shortID:shortId,
        redirectURL:body.url,
        visitHistory:[]
    })

    return res.status(201).json({msg:"URL is creted",id:shortId})
}

module.exports = {
    handleGenrateNewShortURL
}