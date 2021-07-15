const express = require('express')

const PostCtrl = require('../controllers/post-ctrl')


const router = express.Router()

const Post = require('../models/post-model')

const utf8 = require('utf8')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../../instagram/client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    }
})

const upload = multer({storage: storage});

router.post('/post', upload.single("file"), (req, res) => {
console.log(req.body.title);
    console.log(req.body.content);
    console.log(req.file);
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        postedBy: req.body.postedBy,
        file: req.file.filename.normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
    });
    console.log(post);
    post.save().then(result => {
        res.json({post: result})
    })
        .catch(err => {
            console.log(err)
        });
});
router.get('/posts', PostCtrl.getPosts)
router.get('/post/:id',PostCtrl.getPostById)

module.exports = router
