// import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoList } from '../components/List/TodoList/TodoList.jsx'
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx'
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx'
import { Detail } from '../components/Create/Detail/Detail.jsx'

import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <section className='xd'>
        <div className='Details'>
          <Detail info='Title' placeholder='Add a Title...'/>
          <Detail info='Description' placeholder='Add a Description...'/>
          <CreateTodoButton/>
        </div>
        <TodoList/>
      </section>
    </div>
  );
}

export default App;
