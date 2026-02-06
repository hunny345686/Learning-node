import express from "express";
const router = express.Router()
import multer from "multer";
import path from "node:path";
import { Blog } from "../models/blog.js"

const storage = multer.diskStorage({
    destination: (err, file, cb) => {
        cb(null, path.resolve("./public/imgs"))
    },
    filename: (err, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })
router.get("/add-new", (req, res) => {
    return res.render("addBlog", {
        user: req.user
    })
})


router.get("/blog/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    return res.render("blog", {
        user: req.user,
        blog
    })
})

router.post("/", upload.single("coverImg"), async (req, res) => {

    const { title, body } = req.body
    const blog = await Blog.create({
        title, body,
        coverImg: `/imgs/${req.file.filename}`,
        createdBy: req.user._id
    })

    return res.redirect(`/blog/${blog._id}`)
})


export default router;




