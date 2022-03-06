// import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoList } from '../components/TodoList/TodoList.jsx'
import { CreateTodoButton } from '../components/CreateButton/CreateTodoButton.jsx'
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx'

import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <TodoList/>
      <CreateTodoButton/>
    </div>
  );
}

export default App;
