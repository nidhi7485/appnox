require('dotenv').config()
const express = require('express')

const app = express()

// db
const connectDB = require('./db/connect')
const port = process.env.PORT || 5000

// middleware
app.use(express.json())
// routers
const userRouter = require('./routes/userRoute')
app.use(userRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listining on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}
start()
