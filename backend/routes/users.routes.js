const express = require('express')
const router = express.Router()

const UsersController = require('../controllers/users-controller')

router.post('/users', UsersController.addUser)
router.put('/users/:id', UsersController.updateUser)
router.delete('/users/:id', UsersController.deleteUser)
router.get('/users/:id', UsersController.getUser)
router.get('/users', UsersController.getUserList)

module.exports = router
