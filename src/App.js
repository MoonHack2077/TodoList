import './App.css';
import { TodoCounter } from './components/TodoCounter.js'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      {/* <TodoSearch/> */}
      <input placeholder='Add a new todo...' />
      {/* <TodoList>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
