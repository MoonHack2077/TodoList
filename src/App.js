import { TodoCounter } from './components/TodoCounter.js'
import { TodoSearch } from './components/TodoSearch.js'
import { TodoList } from './components/TodoList.js'
import { CreateTodoButton } from './components/CreateTodoButton.js'
import React from 'react'
import './index.css'

function App() {
  return (
    <div className='App'>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList/>
      <CreateTodoButton/>
    </div>
  );
}

export default App;
