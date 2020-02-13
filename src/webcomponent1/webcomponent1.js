import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import Todo from './Todo'

function WebComponent1() {
  const [todos, setTodos] = useState([])
  axios.get('https://jsonplaceholder.typicode.com/todos?userId=1').then(response => setTodos(response.data))

  return (
    <div className="App">
      <header className="App-header">
        <p>Lijst van nep TODO's:</p>
        <ul>
          {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          })}
        </ul>
      </header>
    </div>
  )
}

export default WebComponent1
