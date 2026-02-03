import express from "express";
import multer from "multer";
import path from "node:path"

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

//  const upload = multer({ dest: "upload/" })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, "./upload")
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.get("/", (req, res) => {
    res.render("homepage")
})

app.post("/upload", upload.single("profileimg"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    // res.send("File uploaded successfully")
    return res.redirect('/')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})