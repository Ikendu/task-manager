import { FaCheckDouble, FaEdit, FaRegTrashAlt } from 'react-icons/fa'

const Tasks = ({ task, index, deleteTask, getOneTask }) => {
  const { name, _id } = task
  return (
    <div className='task'>
      <p>
        <b>{index + 1}. </b>
        {name}
      </p>
      <div className='task-icons'>
        <FaCheckDouble color='green' />
        <FaEdit color='purple' onClick={() => getOneTask(task)} />
        <FaRegTrashAlt color='red' onClick={() => deleteTask(_id)} />
      </div>
    </div>
  )
}
export default Tasks
