const TaskForm = ({ name, handleInput, createTask, isEditing, updateTask }) => {
  return (
    <div>
      <form className='task-form' onSubmit={isEditing ? updateTask : createTask}>
        <input
          name='name'
          placeholder='Add a task'
          type='text'
          value={name}
          onChange={handleInput}
        />
        <button type='submit'>{isEditing ? `Edit` : `Add`}</button>
      </form>
    </div>
  )
}
export default TaskForm
