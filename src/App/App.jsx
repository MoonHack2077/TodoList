import { TodoList } from '../components/List/TodoList/TodoList.jsx';
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx';
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx';
import { Detail } from '../components/Create/Detail/Detail.jsx';
import React, { useState, useEffect } from 'react';
import './App.css';

let id = 1;
const KEY = 'TODOS';

function App() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [todos,setTodos] = useState([]);
  const [done,setDone] = useState(false);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) setTodos(storedTodos);
  },[]);

  useEffect(()=>{
    localStorage.setItem(KEY, JSON.stringify(todos))
  },[todos]);

  const handle = () => {
    if(!title || !description) return
    const task = {title, description, done, id: id++};
    setTodos([...todos, task]);
    setTitle('');
    setDescription('');
  }

  const find = id => todos.findIndex(item => item.id===id);

  const check = id => {
    const index = find(id);
    todos[index].done = !todos[index].done;
    setDone(todos[index].done)
  }
  
  const remove = id =>{
    const index = find(id);
    todos.splice(index,1);
    setTodos([...todos]);
  }


  return (
    <div className='App'>

      <NavBar/>

      <section className='xd'>
        <div className='Details'>

          <Detail 
            value={title} 
            onChange={e=>setTitle(e.target.value)} 
            info='Title' 
            placeholder='Add a Title...'
          />

          <Detail 
            value={description} 
            onChange={e=>setDescription(e.target.value)} 
            info='Description' 
            placeholder='Add a Description...'
          />

          <CreateTodoButton onClick={handle}/>

        </div>

        <TodoList 
          onClick={remove} 
          onChange={check} 
          todos={todos}
        />
      </section>
    </div>
  );
}

export { App };
