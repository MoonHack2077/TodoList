import { TodoList } from '../components/List/TodoList/TodoList.jsx';
import { BtnSet } from '../components/Create/Button/BtnSet.jsx';
import { NavBar } from '../components/NavBar/Nav/NavBar.jsx';
import { Detail } from '../components/Create/Detail/Detail.jsx';
import { Modal } from '../components/Modal/Modal.jsx';
import { Alert } from '../components/Alert/Alert.jsx';
import { AppLogic } from '../Logic/AppLogic.js';
import './App.css';


function App() {
  const { create , setUpTodo , modalSettings , filters , removeAllDone , getHideAlerts , SetSearch , States } = AppLogic();
  const { hideAlertDetail , hideAlertModal } = getHideAlerts();
  const { todos , title , description , search , hideModal , newTitle , newDescription , completed } = States();
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
        onChange={ e => SetSearch( e.target.value ) }
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