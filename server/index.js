const express = require('express')
const bodyParser = require('body-parser')
const passport = require("passport")
const mongoose = require("mongoose")
const users = require('./routes/api/users')
const userRouter = require('./routes/user-router')
const postRouter = require('./routes/post-router')
const app = express()
const apiPort = 3001
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true})
    .then( () => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


app.use(passport.initialize());
require("./config/passport") (passport);
app.use('/api/users', users)
app.use('/api', userRouter)
app.use('/api', postRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
