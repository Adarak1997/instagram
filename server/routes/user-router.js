const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/users', UserCtrl.getUsers)
router.get('/user/:id',UserCtrl.getUserById)

module.exports = router
