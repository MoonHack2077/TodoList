import { useState, useEffect } from 'react';

const KEY = 'TODOS';

function Todos(){
    const [ todos , setTodos ] = useState( JSON.parse( localStorage.getItem( KEY ) ) );

    // useEffect to look out to all todos and set these at the localStorage
    useEffect( () => localStorage.setItem( KEY , JSON.stringify( todos ) ) , [todos]);

    const SetTodos = param =>{
        setTodos(param);
    }

     //Find index of nesessary todo
     const findTodo = id => todos.findIndex( todo => todo.id === id );

    return { todos , SetTodos , findTodo}
}

export { Todos }