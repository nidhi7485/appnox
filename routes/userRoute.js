const express = require('express')
const router = express.Router()

const { userResgister, login } = require('../controller/userController')

router.route('/user/register').post(userResgister)
module.exports = router
