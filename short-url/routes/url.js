const express = require("express")
const { handleGenrateNewShortURL } = require("../controller/url")

const router = express.Router()

router.post("/",handleGenrateNewShortURL)


module.exports = router