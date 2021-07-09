const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://root:root@cluster0.njjzd.mongodb.net/instagram?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
