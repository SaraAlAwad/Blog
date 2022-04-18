const express = require("express")
const multer = require("multer")
const cors = require("cors")
const { nanoid } = require("nanoid")
 const port= 9000
const app= express()

const posts= []
// const posts= [
//     {
//         id: 1,
//         title: "post1",
//         img: "img1"
//     },
//     {
//         id: 2,
//         title: "post2",
//         img: "img2"
//     },
//     {
//         id: 3,
//         title: "post3",
//         img: "img3"
//     },
// ]
app.use(express.static("uploads"))
app.use((req, _, next) => {
    console.log("new request –", req.method, req.url)
    next()
})
app.use(cors())
app.use(express.json())
app.get("/", (req, res)=>{
    res.send("it works")
})
app.get("/posts", (req, res)=>{
    res.json(posts)
})
app.get("/posts/:id", (req, res)=>{
    const postId = req.params.id
    const post= posts.find(u => u.id === parseInt(postId))
    console.log("postId",postId);
    if(post) {
        res.json(post)
    } else {
        res.status(404).send({ error: "Post not found!" })
    }
})
const upload = multer({ dest: 'uploads/' })
const uploadFilesMiddleware = upload.single('postImg') 
app.post("/createPost",
    uploadFilesMiddleware,
    (req, res) => {
        console.log(req.body)
        console.log(req.file)
        console.log(req.files)

        const newPost = {
            id: nanoid(),
            title: req.body.title,
            postImg: req.file.filename,
            txt: req.body.txt
        }

        posts.push(newPost)
        res.json(posts)
    }
)
app.listen(port, ()=> console.log("server is listening on port"))