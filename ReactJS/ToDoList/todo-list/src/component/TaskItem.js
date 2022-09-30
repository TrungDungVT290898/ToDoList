import React from 'react'

export default function TaskItem ({
  task,
  handleCheckboxDoneChange,
  removeTask,
  onTransitionEnd
}) {
  return (
    <div>
      <li key={task.id} className={task.status ? 'done ' : ''}>
        <span className='label'>{task.title}</span>
        <div className='actions'>
          <input
            checked={task.status}
            onChange={e => handleCheckboxDoneChange(task.id, e.target.checked)}
            type='checkbox'
            className='btn-action btn-action-done'
          />
          <button
            onClick={() => removeTask(task.id)}
            className='btn-action btn-action-delete'
          >
            X
          </button>
        </div>
      </li>
    </div>
  )
}
