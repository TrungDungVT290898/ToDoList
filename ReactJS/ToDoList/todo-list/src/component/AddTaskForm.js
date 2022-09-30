import React from 'react'

export default function AddTaskForm ({
  handleSubmit,
  handleInputChange,
  newtask
}) {
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='newitem'>Add to the todo list</label>
        <input
          onChange={handleInputChange}
          type='text'
          id='newitems'
          value={newtask}
        />
        <button type='submit'>Add Item</button>
      </form>
    </div>
  )
}
