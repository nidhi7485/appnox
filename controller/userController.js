const User = require('../model/User')
const {
  createJwt,
  isValidToken,
  attchCookiesToResponse,
} = require('../utils/jwt')
const userResgister = async (req, res) => {
  // console.log(req.body)
  try {
    const user = await User.create(req.body)
    const tokenUser = { id: user._id, email: user.email }
    attchCookiesToResponse({ res, user: tokenUser })
    res.status(200).json({ tokenUser })
  } catch (error) {
    res.json(error)
  }
}

const login = async (req, res) => {
  res.send('login')
}

module.exports = { userResgister, login }
