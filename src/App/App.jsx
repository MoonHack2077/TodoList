// import { TodoCounter } from './components/TodoCounter.jsx'
import { TodoList } from '../components/List/TodoList/TodoList.jsx'
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx'
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx'
import { Detail } from '../components/Create/Detail/Detail.jsx'
import { Task } from '../Task';
import React from 'react'
import './App.css'

let id =1;
const tasks = [
  new Task({title: 'Learn React', description: 'xs', id: id++}),
  new Task({title: 'Learn React', description: 'xs', id: id++}),
  new Task({title: 'Learn React', description: 'xs', id: id++}),
  new Task({title: 'Learn React', description: 'xs', id: id++}),
  new Task({title: 'Learn React', description: 'xs', id: id++}),
  new Task({title: 'Learn React', description: 'xs', id: id++})
]

function App() {
  const [title,setTitle] = React.useState('');
  const [description,setDescription] = React.useState('');
  const [todos,setTodos] = React.useState(tasks);

  const handle = () => setTodos([...todos, new Task({title, description, id: id++})])

  return (
    <div className='App'>
      <NavBar/>
      <section className='xd'>
        <div className='Details'>
          <Detail value={title} onChange={e=>setTitle(e.target.value)} info='Title' placeholder='Add a Title...'/>
          <Detail value={description} onChange={e=>setDescription(e.target.value)} info='Description' placeholder='Add a Description...'/>
          <CreateTodoButton onClick={handle}/>
        </div>
        <TodoList tasks={todos}/>
      </section>
    </div>
  );
}

export default App;
