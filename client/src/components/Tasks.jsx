import { FaCheckDouble, FaEdit, FaRegTrashAlt } from 'react-icons/fa'

const Tasks = ({ task, index, deleteTask, getOneTask, completedTask }) => {
  const { name, _id, completed } = task
  return (
    <div className={completed ? 'task completed' : 'task'}>
      <p>
        <b>{index + 1}. </b>
        {name}
      </p>
      <div className='task-icons'>
        <FaCheckDouble color='green' onClick={() => completedTask(task)} />
        <FaEdit color='purple' onClick={() => getOneTask(task)} />
        <FaRegTrashAlt color='red' onClick={() => deleteTask(_id)} />
      </div>
    </div>
  )
}
export default Tasks
