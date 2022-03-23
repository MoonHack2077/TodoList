import { TodoList } from '../components/List/TodoList/TodoList.jsx';
import { BtnSet } from '../components/Create/Button/BtnSet.jsx';
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx';
import { Detail } from '../components/Create/Detail/Detail.jsx';
import { Modal } from '../components/Modal/Modal.jsx';
import { Alert } from '../components/Alert/Alert.jsx';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const KEY = 'TODOS';

function App() {
  // States
  const [ todos , setTodos ] = useState( JSON.parse( localStorage.getItem( KEY ) ) );
  const [ title , setTitle ] = useState('');
  const [ description , setDescription ] = useState('');
  const [ search , setSearch ] = useState('');
  const [ hideModal , setHideModal ] = useState(true);
  const [ hideAlertDetail , setHideAlertDetail ] = useState(true);
  const [ hideAlertModal , setHideAlertModal ] = useState(true);
  const [ newTitle , setNewTitle ] = useState('');
  const [ newDescription , setNewDescription ] = useState('');
  const [ completed , setCompleted ] = useState(false);
  const [ TODO , SETTODO ]= useState({});

  // useEffect to look out to all todos and set these at the localStorage
  useEffect( () => localStorage.setItem( KEY , JSON.stringify( todos ) ) , [todos]);

  //Create todo
  const create = () => {
    if(!title || !description){
      setHideAlertDetail(false);
      return;
    }
    setHideAlertDetail(true);
    const todo = { title , description , done: false , id: uuid() };
    setTodos([...todos, todo]);
    setTitle('');
    setDescription('');
  }

  //Find index of nesessary todo
  const findTodo = id => todos.findIndex( todo => todo.id === id );

  //Set up todos
  const setUpTodo = targetId => {
    const newTodos = [...todos];
    const index = findTodo(targetId);
    let { title , description , done , hide , id } = newTodos[index];

    const toggleCheck = () => {
      newTodos[index].done = !newTodos[index].done;
      setTodos(newTodos);
    }

    const remove = () => {
      newTodos.splice( index , 1 );
      setTodos(newTodos);
    };

    const edit = () => {
      setNewTitle(title);
      setNewDescription(description);
      setCompleted(done);
      SETTODO({ title, description, done, hide, id });
      setHideModal(!hideModal);
    };
  
    return { remove , edit , toggleCheck  };
  }

  //Modal settings
  const modalSettings = () => {
    const index = findTodo(TODO.id);
    const newTodos = [...todos];

    const toggleCompleted = () => {
      TODO.done = !TODO.done;
      setCompleted(TODO.done);
      newTodos[index].done = completed;
      setTodos(newTodos);
    }
  
    const setNewValues = () => {
      if(!newTitle || !newDescription){
        setHideAlertModal(false);
        return;
      }
      setHideAlertModal(true);
      //Injecting new values
      TODO.title = newTitle;
      TODO.description = newDescription;
      TODO.done = completed;
      TODO.hide = false;
      TODO.id = uuid();

      SETTODO({...TODO});

      newTodos.splice( index, 1 , TODO );

      setTodos(newTodos);
      setHideModal(!hideModal);
    }

    return { toggleCompleted , setNewValues }
  }

  //Filter searched todos
  const filters = target => {
    const { id , checked } = target;

    for(const todo of todos){
      todo.hide=false;
      const searchedLower = search.toLowerCase();
      const hasSearched = todo.title.toLowerCase().includes(searchedLower) || todo.description.toLowerCase().includes(searchedLower);

      if( (hasSearched) && (id==='Done' && checked && todo.done)){
        todo.hide = false;
      }else if( (hasSearched) && (id==='Uncompleted' && checked && !todo.done)){
        todo.hide = false;
      }else if( (hasSearched) && (id==='All' && checked)){
        todo.hide = false;
      }else{
        todo.hide = true;
      }
      setTodos([...todos]);
    }

  }

  const removeAllDone = () => {
    const newTodos = [...todos];
    setTodos( newTodos.filter( todo => !todo.done ) );
  }

  return (
    <div className = 'App'>

      <Modal 
        hideModal={ hideModal } 
        hideAlertModal = { hideAlertModal }
        titleValue={ newTitle } 
        titleChange={ e => setNewTitle( e.target.value )} 
        descriptionValue={ newDescription } 
        descriptionChange={ e => setNewDescription( e.target.value )} 
        completed={ completed }
        onClick={ modalSettings }
      />

      <NavBar 
        value={ search } 
        onChange={ e => setSearch( e.target.value ) }
        onClick = { e => filters( e ) }
      />
      
      <section className = 'container'>
        <Alert 
          className='Alert-Detail'
          message='Title and description are required!!' 
          hide={ hideAlertDetail }
      />
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

          <BtnSet className='btn-set' value='Add' onClick = { create }/>

        </div>

      <div className='TodoList-container'>
        <TodoList 
            onClick = { setUpTodo }
            todos = { todos }
          />
      </div>
      </section>

      <BtnSet 
          className='btn-set remove'
          value='Remove all done' 
          onClick={ removeAllDone }
      />

    </div>
  );
}

export { App };