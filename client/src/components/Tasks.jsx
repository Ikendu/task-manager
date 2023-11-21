import { FaCheckDouble, FaEdit, FaRegTrashAlt } from 'react-icons/fa'
const Tasks = ({ name, completed, _id, index, deleteTask }) => {
  return (
    <div className='task'>
      <p>
        <b>{index + 1}. </b>
        {name}
      </p>
      <div className='task-icons'>
        <FaCheckDouble color='green' />
        <FaEdit color='purple' />
        <FaRegTrashAlt color='red' onClick={() => deleteTask(_id)} />
      </div>
    </div>
  )
}
export default Tasks
