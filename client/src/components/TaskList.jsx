import { useEffect, useState } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'
import Tasks from './Tasks'
import { toast } from 'react-toastify'
import { URL } from '../App'
import loadImg from '../assets/load.gif'

const TaskList = () => {
  const [formData, setFormData] = useState({ name: ``, complete: false })
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [taskId, setTaskId] = useState(``)
  const [completedTasks, setCompletedTasks] = useState([])

  const { name } = formData

  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const createTask = async (e) => {
    e.preventDefault()
    if (name === ``) {
      return toast.error(`Name cannot be empty`)
    }
    try {
      await axios.post(URL + `/api/task`, formData)
      setFormData({ ...formData, name: `` })
      getTasks()
      toast.success(`Task added successfully`)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getTasks = async () => {
    setLoading(true)
    try {
      const resp = await axios.get(`${URL}/api/task`)
      setTasks(resp.data)
      setLoading(false)
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/task/${id}`)
      getTasks()
      toast.success(`Deleted successfully`)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getOneTask = async (task) => {
    setFormData({ name: task.name, completed: false })
    setIsEditing(true)
    setTaskId(task._id)
  }

  const updateTask = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`${URL}/api/task/${taskId}`, formData)
      setFormData({ ...formData, name: `` })
      toast.success(`Updated successfully`)
      setIsEditing(false)
      getTasks()
    } catch (error) {
      toast.error(error.message)
    }
  }

  const completedTask = async (task) => {
    const newFormData = { name: task.name, completed: true }
    try {
      await axios.put(`${URL}/api/task/${task._id}`, newFormData)
      getTasks()
      toast.success(`task completed successfully, Next task`)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    const cTask = tasks.filter((task) => {
      return task.completed === true
    })
    setCompletedTasks(cTask)
  }, [tasks])

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInput={handleInput}
        createTask={createTask}
        isEditing={isEditing}
        updateTask={updateTask}
      />
      <div className='--flex-between pb'>
        <p>
          <b>Total Tasks: </b> {tasks.length}
        </p>
        <p>
          <b>Completed Tasks: </b> {completedTasks.length}
        </p>
      </div>
      <hr />
      {loading && (
        <div className='--flex-center'>
          <img src={loadImg} alt='Loading' width={50} />
        </div>
      )}
      {!loading && tasks.length == 0 ? (
        <div className='--py'>
          <center>
            <h3>No task present</h3>
            <p>Add some task</p>
          </center>
        </div>
      ) : (
        tasks.map((task, index) => (
          <Tasks
            task={task}
            key={task._id}
            index={index}
            deleteTask={deleteTask}
            getOneTask={getOneTask}
            completedTask={completedTask}
          />
        ))
      )}
    </div>
  )
}
export default TaskList
