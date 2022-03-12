import { TodoList } from '../components/List/TodoList/TodoList.jsx';
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx';
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx';
import { Detail } from '../components/Create/Detail/Detail.jsx';
import React from 'react';
import './App.css';


let id =1;

function App() {
  const [title,setTitle] = React.useState('');
  const [description,setDescription] = React.useState('');
  const [todos,setTodos] = React.useState([]);

  const handle = () => {
    if(!title || !description) return
    const task = {title, description, done: false, id: id++};
    setTodos([...todos, task]);
    setTitle('');
    setDescription('');
  }

  const find = id => todos.findIndex(item => item.id===id);

  const check = task => {
    const index = find(task);
    todos[index].done = !todos[index].done;
  }
  
  const remove = task =>{
    const index = find(task);
    console.log(index);
    todos.splice(index,1);
    setTodos([...todos]);
    id=1;
  }

  return (
    <div className='App'>
      <NavBar/>
      <section className='xd'>
        <div className='Details'>
          <Detail value={title} onChange={e=>setTitle(e.target.value)} info='Title' placeholder='Add a Title...'/>
          <Detail value={description} onChange={e=>setDescription(e.target.value)} info='Description' placeholder='Add a Description...'/>
          <CreateTodoButton onClick={handle}/>
        </div>
        <TodoList onClick={remove} onChange={check} tasks={todos}/>
      </section>
    </div>
  );
}

export { App };
