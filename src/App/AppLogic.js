import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const KEY = 'TODOS';

function AppLogic(){
    const storedTodos = JSON.parse( localStorage.getItem( KEY ) ) ? JSON.parse( localStorage.getItem( KEY ) ) : [];
    
    // States
    const [ todos , setTodos ] = useState( storedTodos );
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

    const getHideAlerts = () =>{
        return { hideAlertDetail , hideAlertModal }
    }

    
    
    const States = () =>{
        return { todos , title , description , search , hideModal , newTitle , newDescription , completed , TODO }
    }

    const SetStates = () =>{
        const SetTitle = param =>  setTitle (param);
        const SetDescription = param => setDescription(param)
        const SetNewTitle = param => setNewTitle (param);
        const SetNewDescription = param => setNewDescription(param);
        const SetSearch = param => setSearch (param);
        
        return { SetTitle , SetDescription , SetNewTitle , SetNewDescription ,  SetSearch }
    }

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

    
    //Function to remove all todos done
    const removeAllDone = () => {
        const newTodos = [...todos];
        setTodos( newTodos.filter( todo => !todo.done ) );
    }

    return { create , setUpTodo , modalSettings , filters , removeAllDone , getHideAlerts , SetStates , States}
}

export { AppLogic }