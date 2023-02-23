const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
const connectDB = (url) => {
  console.log('connected to db...')
  return mongoose.connect(url)
}
module.exports = connectDB
