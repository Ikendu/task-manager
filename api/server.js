const dotenv = require('dotenv').config()

const express = require(`express`)
const mongoose = require(`mongoose`)

const connectDB = require('./config/mongoDB')
const Task = require('./config/Models')
const { createTask, getTasks, getTask } = require('./controllers/taskControll')

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get(`/`, (req, res) => res.send(`Welcome to Home Page`))
app.post(`/api/task`, createTask)
app.get(`/api/task`, getTasks)
app.get(`/api/task/:id`, getTask)

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
