import { useState } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'
import Tasks from './Tasks'

const TaskList = () => {
  const [formData, setFormData] = useState({ name: ``, complete: false })

  const { name } = formData

  const handleInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const createTask = async (e) => {
    e.preventDefault()
    const data = await axios
  }

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm />
      <div className='--flex-between pb'>
        <p>
          <b>Total Tasks: </b> 0
        </p>
        <p>
          <b>Completed Tasks: </b> 0
        </p>
      </div>
      <hr />
      <Tasks />
    </div>
  )
}
export default TaskList
