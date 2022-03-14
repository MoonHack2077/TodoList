import { TodoList } from '../components/List/TodoList/TodoList.jsx';
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx';
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx';
import { Detail } from '../components/Create/Detail/Detail.jsx';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const KEY = 'TODOS';

function App() {
  const [ title , setTitle ] = useState('');
  const [ description , setDescription ] = useState('');
  const [ todos , setTodos ] = useState( JSON.parse(localStorage.getItem(KEY)) );
  const [ search , setSearch ] = useState('');

  useEffect( () => localStorage.setItem( KEY, JSON.stringify(todos) ) , [todos]);

  const handle = () => {
    if(!title || !description) return
    const todo = { title, description, done: false, id: uuid(), hide: false };
    setTodos([...todos, todo]);
  }

  const findTodo = id => todos.findIndex( todo => todo.id===id );

  const toggleCheck = id => {
    const index = findTodo(id);
    todos[index].done = !todos[index].done;
    setTodos([...todos]);
  }
  
  const remove = id =>{
    const index = findTodo(id);
    todos.splice( index , 1 );
    setTodos([...todos]);
  };

  const filters = (e) =>{

    if(search==='') todos.map( todo => todo.hide===false );

    for(const todo of todos){

      const hasSearched = todo.title.includes(search) || todo.description.includes(search);

      if( (hasSearched) && (e.checked && todo.done)){
        todo.hide = false;
      }else if( (hasSearched) && (e.checked && !todo.done)){
        todo.hide = false;
      }else if( (hasSearched) || (e.checked)){
        todo.hide = false;
      }
      else{
        todo.hide = true;
      }
      setTodos([...todos]);
    }
  }


  return (
    <div className = 'App'>

      <NavBar 
        value={ search } 
        onChange={ e => setSearch(e.target.value) }
        onClick = { e => filters(e) }
      />

      <section className = 'container'>
        <div className = 'Details'>

          <Detail 
            value = { title } 
            onChange= { e => setTitle( e.target.value ) } 
            info = 'Title'
            placeholder = 'Add a Title...'
          />

          <Detail 
            value = { description } 
            onChange = { e => setDescription( e.target.value ) } 
            info = 'Description' 
            placeholder = 'Add a Description...'
          />

          <CreateTodoButton onClick = { handle }/>

        </div>

        <TodoList 
          onClick = { remove } 
          toggleCheck = { toggleCheck } 
          todos = {todos}
        />
      </section>
    </div>
  );
}

export { App };