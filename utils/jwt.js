const jwt = require('jsonwebtoken')

const createJwt = async ({ payload }) => {
  const token = await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
  return token
}

const isValidToken = async ({ token }) =>
  jwt.varify(token, process.env.JWT_SECRET)

const attchCookiesToResponse = async ({ res, user }) => {
  const token = createJwt({ payload: user })
  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('token', token, {
    httpOnly: true,
    expiresIn: new Date(Date.now() + oneDay),
  })
}
module.exports = { createJwt, isValidToken, attchCookiesToResponse }
