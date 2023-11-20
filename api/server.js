const dotenv = require('dotenv').config()

const express = require(`express`)

const connectDB = require('./config/mongoDB')

const app = express()

app.get(`/`, (req, res) => res.send(`Welcome to Home Page`))

const PORT = process.env.PORT || 5000

const connectServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
connectServer()
