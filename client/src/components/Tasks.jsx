import { FaCheckDouble, FaEdit, FaRegTrashAlt } from 'react-icons/fa'
const Tasks = () => {
  return (
    <div className='task'>
      <p>
        <b>1.</b>
        Task 1
      </p>
      <div className='task-icons'>
        <FaCheckDouble color='green' />
        <FaEdit color='purple' />
        <FaRegTrashAlt color='red' />
      </div>
    </div>
  )
}
export default Tasks
