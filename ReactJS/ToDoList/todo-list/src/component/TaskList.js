import React from 'react'
import TaskItem from './TaskItem'
export default function TaskList ({
  tasks,
  showIncomplete,
  handleCheckboxDoneChange,
  removeTask,
  handleCheckboxChange,
  onTransitionEnd
}) {
  return (
    <>
      <div>
        <ul className='task-list'>
          {tasks
            .filter(task => (showIncomplete ? task.status !== true : true))
            .map(task => (
              <TaskItem
                key={task.id}
                task={task}
                handleCheckboxDoneChange={handleCheckboxDoneChange}
                removeTask={removeTask}
              />
            ))}
        </ul>
        <div className='filter-wrapper'>
          <label htmlFor='filter' className='filter-label'>
            Show incompleted task only
          </label>
          <input
            onChange={handleCheckboxChange}
            type='checkbox'
            name=''
            id='filter'
            checked={showIncomplete}
          />
        </div>
      </div>
    </>
  )
}
