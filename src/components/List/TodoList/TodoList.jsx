import React from 'react';
import './TodoList.css';
import { TodoItem } from '../TodoItem/TodoItem.jsx';
// import { NavList } from '../NavList/NavList.jsx';
import { Task } from '../../../Task';

// function randomId(){
//     return Math.floor(Math.random() * 200);
// }

// let id = 1;
const tasks = [
    new Task({title: 'Learn React', description: 'xs'}),
    new Task({title: 'Learn React', description: 'xs'}),
    new Task({title: 'Learn React', description: 'xs'})
]
// console.log( tasks.findIndex(idx => idx.id===0) )
function TodoList(){
    const  [id,setId] = React.useState(1)


    return (
        <section className='TodoList-container'>
                <div className='TodoList-container-xd' >
                    <div>
                        <span className='indicator'>Title</span>
                    </div>
                    <div>
                        <span className='indicator'>Description</span>
                    </div>
                    <div>
                        <span className='indicator'>Completed</span>
                    </div>
                    <div>
                        <span className='indicator'>other</span>
                    </div>
                </div>
                
                <section className='TodoItem-container' onChange={id=>setId(id++)}>
                    {tasks.map( task => <TodoItem id={id} key={task.id} title={task.title} description={task.description}  /> )}
                </section>
            {/* <ul className='TodoList'>
                {tasks.map( task => <TodoItem id={task.id} key={task.id} text={task.name}  /> )}
            </ul> */}
        </section>
    )
}

export { TodoList, tasks }