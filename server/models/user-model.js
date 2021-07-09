const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    followers:{
        type: Array,
        required: true
    },
    following: {
        type: Array,
        required: true
    }
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
