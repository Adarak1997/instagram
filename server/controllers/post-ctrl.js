const Post = require('../models/post-model')


createPost = async (req, res) => {
    const {title,content,pic} = req.body
    if(!title || !content || !pic){
        return  res.status(422).json({error:"Plase add all the fields"})
    }
    const post = new Post({
        title,
        content,
        photo:pic,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
        .catch(err=>{
            console.log(err)
        })
};


getPosts = async (req, res) => {
    await Post.find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }
        return res.status(200).json({ success: true, data: posts })
    }).catch(err => console.log(err))
}

getPostById = async (req, res) => {
    await Post.findOne({ _id: req.params.id }, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!post) {
            return res
                .status(404)
                .json({ success: false, error: `Post not found` })
        }
        return res.status(200).json({ success: true, data: post })
    }).catch(err => console.log(err))
}

module.exports = {
    createPost,
    getPosts,
    getPostById
}
