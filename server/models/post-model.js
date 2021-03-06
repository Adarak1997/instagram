
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:false
    },
    likes:[{
        type:ObjectId,
        ref:"users"
    }],
    postedBy:{
        type:String,
        required: true
    }
})

const Post = mongoose.model('posts', postSchema)
module.exports = Post
