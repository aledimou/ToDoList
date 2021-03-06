import React from 'react'

function Todo({text, todos, setTodos, todo}) {

    const deleteHandler  = (e)=>{
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = (e) =>{
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return{
                    ...item, completed: !item.completed
                }
            } else {
                return item
            }
        }))
    }

    return <> 
        <div className = "todo">
            <li className = {`todo-item ${todo.completed? "completed":""}`}>{text}</li>
            <button className = "complete-btn" onClick = { completeHandler}>
                <i className = "fas fa-check"></i>
            </button>
            <button className = "trash-btn " onClick = {deleteHandler}>
                <i className = "fas fa-trash"></i>
            </button>
        </div>
    </>

}


export default Todo