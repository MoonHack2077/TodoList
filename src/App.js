import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoSearch } from './components/TodoSearch.jsx'
import { TodoList } from './components/TodoList.jsx'
import { CreateTodoButton } from './components/CreateTodoButton.jsx'
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
