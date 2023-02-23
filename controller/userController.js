const User = require('../model/User')
const jwt = require('jsonwebtoken')
const userResgister = async (req, res) => {
  // console.log(req.body)
  try {
    const user = await User.create(req.body)
    const tokenUser = { id: user._id, email: user.email }
    const token = jwt.sign(tokenUser, 'jwt-secret', { expiresIn: '1d' })
    res.status(200).json({ tokenUser, token })
  } catch (error) {
    res.json(error)
  }
}

const login = async (req, res) => {
  res.send('login')
}

module.exports = { userResgister, login }
