import React from 'react'
import { useState } from 'react';
import './taskList.css'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

export const TaskList = (props) => {
    const [task, setTask] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        const addTask = {
            id:Math.floor(Math.random() * 1000),
            text: input,
            completed: false
        }
        setTask([...task, addTask])
        setInput('');
    }
    function handleDelete(id) {
        let filteredTask = [...task].filter((tasks) => tasks.id !== id)
        setTask(filteredTask)
    }

    function toggleComplete(id) {
        setTask(
            task.map(task => (
                task.id === id ? {...task, completed: !task.completed } : task
            ))
        )
    }

    const date = new Date()
    
      return (
        <>
        <p>{date.getDate}</p>
        <form>
        <input value={input} onChange={event => setInput(event.target.value)} type='text' placeholder='add tasks here...'></input>
        <button onClick={handleSubmit}><AiOutlinePlus /></button>
        <ul>
          {task.map((task) => (
            <li className={`list ${task.completed ? 'completed': ''}`} key={task.id}>
              <span onDoubleClick={() => toggleComplete(task.id)}>{task.text}</span>
              <button onClick={() => handleDelete(task.id)}><AiOutlineClose /></button>
            </li>
          )) }
        </ul>
        <p>{(task < 1) ? 'You have no tasks' : `Tasks Planned: ${task.length}`}</p>
        </form>
        </>
  )
}
