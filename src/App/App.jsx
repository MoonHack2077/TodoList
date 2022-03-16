import { TodoList } from '../components/List/TodoList/TodoList.jsx';
import { CreateTodoButton } from '../components/Create/Button/CreateTodoButton.jsx';
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx';
import { Detail } from '../components/Create/Detail/Detail.jsx';
import { Modal } from '../components/Modal/Modal.jsx'
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const KEY = 'TODOS';


function App() {
  const [ title , setTitle ] = useState('');
  const [ description , setDescription ] = useState('');
  const [ todos , setTodos ] = useState( JSON.parse(localStorage.getItem(KEY)) );
  const [ search , setSearch ] = useState('');
  const [ hideModal , setHideModal ] = useState(true);
  const [ newTitle , setNewTitle ] = useState('');
  const [ newDescription , setNewDescription ] = useState('');
  const [ completed , setCompleted ] = useState(false);

  useEffect( () => localStorage.setItem( KEY, JSON.stringify(todos) ) , [todos]);

  const handle = () => {
    if(!title || !description) return
    const todo = { title, description, done: false, id: uuid() };
    setTodos([...todos, todo]);
  }

  const findTodo = id => todos.findIndex( todo => todo.id===id );

  const toggleCheck = id => {
    const index = findTodo(id);
    todos[index].done = !todos[index].done;
    setTodos([...todos]);
  }
  
  const set = id => {
    
    const index = findTodo(id);

    const remove = () => {
      todos.splice( index , 1 );
      setTodos([...todos]);
    };

    const edit = () => {
      const { title, description, done } = todos[index];
      setNewTitle(title);
      setNewDescription(description);
      setCompleted(done);
      setHideModal(!hideModal);

      const toggleCompleted = () =>{
        setCompleted(!done);
        setTodos([...todos]);
      }
      
      return { toggleCompleted }
    };

    

    return { remove , edit  };
  }

  

  const filters = target =>{

    for(const todo of todos){
      todo.hide=false;
      const hasSearched = todo.title.includes(search) || todo.description.includes(search);

      if( (hasSearched) && (target.id==='Done' && target.checked && todo.done)){
        todo.hide = false;
      }else if( (hasSearched) && (target.id==='Uncompleted' && target.checked && !todo.done)){
        todo.hide = false;
      }else if( (hasSearched) && (target.id==='All' && target.checked)){
        todo.hide = false;
      }else{
        todo.hide = true;
      }
      setTodos([...todos]);
    }

  }


  return (
    <div className = 'App'>

      <Modal 
        hide={ hideModal } 
        titleValue={ newTitle } 
        titleChange={ e => setNewTitle( e.target.value )} 
        descriptionValue={ newDescription } 
        descriptionChange={ e => setNewDescription( e.target.value )} 
        completed={completed}
        onClick={ () => setHideModal(!hideModal) }
        onChange= { set }
        todos= {todos}
      />

      <NavBar 
        value={ search } 
        onChange={ e => setSearch( e.target.value ) }
        onClick = { e => filters( e ) }
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
          onClick = { set } 
          toggleCheck = { toggleCheck } 
          todos = {todos}
        />
      </section>
    </div>
  );
}

export { App };