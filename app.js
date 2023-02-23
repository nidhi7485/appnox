require('dotenv').config()
const express = require('express')

const app = express()
const cookieParser = require('cookie-parser')
// db
const connectDB = require('./db/connect')
const port = process.env.PORT || 5000

// middleware
app.use(express.json())

app.use(cookieParser())
// routers
const userRouter = require('./routes/userRoute')
app.use(userRouter)

app.get('/', async (req, res) => {
  console.log(req.cookies)
  res.send('e-com-api')
})
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listining on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
