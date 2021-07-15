

const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types ;
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
    followers:[{
        type: ObjectId,
        ref:"users"
    }],
    following:[{
        type: ObjectId,
        ref:"users"
    }]
})

const User = mongoose.model('users', userSchema)
module.exports = User
