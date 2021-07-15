const express = require('express')

const PostCtrl = require('../controllers/post-ctrl')

const router = express.Router()

router.post('/post', PostCtrl.createPost)
router.get('/posts', PostCtrl.getPosts)
router.get('/post/:id',PostCtrl.getPostById)

module.exports = router
