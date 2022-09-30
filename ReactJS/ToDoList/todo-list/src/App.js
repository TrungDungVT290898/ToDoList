import './App.css'
import Header from './component/Header.js'
import React, { useState } from 'react'
import TaskList from './component/TaskList'
import AddTaskForm from './component/AddTaskForm'
function App () {
  const [tasks, setTasks] = useState([
    { id: 'task_1', title: 'Learn JS', status: false, isRemoved: false },
    {
      id: 'task_2',
      title: 'LCode a Todo List in NodeJS',
      status: false,
      isRemoved: false
    }
  ])
  const [showIncomplete, setShowIncomplete] = useState(false)
  const [newtask, setNewTask] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if (newtask) {
      const task = {
        id: Date.now(),
        title: newtask,
        status: 0
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }
  const handleCheckboxChange = e => {
    setShowIncomplete(e.target.checked)
  }
  const handleCheckboxDoneChange = (id, status) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, status: status }
        }
        return task
      })
    )
  }
  const handleInputChange = e => {
    setNewTask(e.target.value)
  }
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const onTransitionEnd = id => {
    console.log(`Transition end on : ${id}`)
  }
  return (
    <div className='container'>
      <Header title='Hi' subTitle='Hello' />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        handleCheckboxDoneChange={handleCheckboxDoneChange}
        removeTask={removeTask}
        handleCheckboxChange={handleCheckboxChange}
      />

      <AddTaskForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        newtask={newtask}
      />
    </div>
  )
}

export default App
