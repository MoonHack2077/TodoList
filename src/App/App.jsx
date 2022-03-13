import { TodoList } from '../components/List/TodoList/TodoList.jsx';
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx';
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx';
import { Detail } from '../components/Create/Detail/Detail.jsx';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const KEY = 'TODOS';

function App() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem(KEY)));

  // useEffect(()=>{
  //   const storedTodos = JSON.parse(localStorage.getItem(KEY));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // },[]);

  useEffect(()=>{
    localStorage.setItem(KEY, JSON.stringify(todos))
  },[todos]);

  const handle = () => {
    if(!title || !description) return
    const task = {title, description, done:false, id: uuid()};
    setTodos([...todos, task]);
    // setTitle('');
    // setDescription('');
  }

  const find = id => todos.findIndex(item => item.id===id);

  const toggleCheck = id => {
    const index = find(id);
    todos[index].done = !todos[index].done;
    setTodos([...todos]);
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
          toggleCheck={toggleCheck} 
          todos={todos}
        />
      </section>
    </div>
  );
}

export { App };
