const Task = require('../config/Models')

//create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    res.json(error)
  }
}

//get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { createTask, getTasks, getTask }
