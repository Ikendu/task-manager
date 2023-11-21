const TaskForm = ({ name, handleInput, createTask }) => {
  return (
    <div>
      <form className='task-form' onSubmit={createTask}>
        <input
          name='name'
          placeholder='Add a task'
          type='text'
          value={name}
          onChange={handleInput}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
export default TaskForm
