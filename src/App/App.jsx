// import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoList } from '../components/List/TodoList/TodoList.jsx'
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx'
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx'
import { Detail } from '../components/Create/Detail/Detail.jsx'
// import { Task } from '../Task';
import React from 'react'
import './App.css'

let id =1;
const tasks = [];

function App() {
  let [title,setTitle] = React.useState('');
  let [description,setDescription] = React.useState('');
  const [todos,setTodos] = React.useState(tasks);

  const handle = () => {
    if(!title || !description) return
    const task = {title, description, done:false, id: id++};
    setTodos([...todos, task]);
    setTitle('')
    setDescription('')
  }

  const check = task => {
    const index = todos.findIndex(item => item.id===task);
    todos[index].done = !todos[index].done
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
        <TodoList onClick={check} tasks={todos}/>
      </section>
    </div>
  );
}

export default App;
