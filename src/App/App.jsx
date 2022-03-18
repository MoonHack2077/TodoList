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
  // States
  const [ title , setTitle ] = useState('');
  const [ description , setDescription ] = useState('');
  const [ todos , setTodos ] = useState( JSON.parse( localStorage.getItem( KEY ) ) );
  const [ search , setSearch ] = useState('');
  const [ hideModal , setHideModal ] = useState(true);
  const [ newTitle , setNewTitle ] = useState('');
  const [ newDescription , setNewDescription ] = useState('');
  const [ completed , setCompleted ] = useState(false);
  let [ TODO , SETTODO ]= useState({});


  // useEffect to look out to all todos and set these at thge localStorage
  useEffect( () => localStorage.setItem( KEY, JSON.stringify( todos ) ) , [todos]);

  //Create a todo
  const handle = () => {
    if(!title || !description) return
    const todo = { title, description, done: false, id: uuid() };
    setTodos([...todos, todo]);
  }

  //Find index of nesessary todo
  const findTodo = id => todos.findIndex( todo => todo.id === id );

  //Set up todos
  const set = targetId => {
    const index = findTodo(targetId);
    let { title, description, done, hide, id } = todos[index];

    const toggleCheck = () => {
      done = !done;
      setTodos([...todos]);
    }

    const remove = () => {
      todos.splice( index , 1 );
      setTodos([...todos]);
    };

    const edit = () => {
      setNewTitle(title);
      setNewDescription(description);
      setCompleted(done);
      SETTODO({ title, description, done, hide, id });
      // console.log(TODO);
      setHideModal(!hideModal);
    };

    
    return { remove , edit , toggleCheck  };
  }

  //Modal
  const modalChanges = () =>{

    const toggleCompleted = () => {
      TODO.done = !TODO.done;
      setCompleted(TODO.done);
      // TODO.done = completed;
      console.log(TODO);
      setTodos({...todos});
    }
  
    const setNewValues = () => {
      if(!newTitle || !newDescription) return;
      const before = findTodo(TODO.id);

      // const newTODO = { ...TODO };
      TODO.title = newTitle;
      TODO.description = newDescription;
      TODO.done = completed;
      TODO.hide = false;

      // console.log(newTODO);
      SETTODO({...TODO});

      todos.splice( todos[before] , 1 , TODO )
      console.log(TODO);

      setTodos([...todos]);
      console.log(todos) ;
      setHideModal(!hideModal);
    }

    return { toggleCompleted , setNewValues }
  }

  //Filter searched todos
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
        onClick={ modalChanges }
        todo= {TODO}
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
          todos = {todos}
        />
      </section>
    </div>
  );
}

export { App };