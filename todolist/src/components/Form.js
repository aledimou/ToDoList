import { nanoid } from 'nanoid'
import React from 'react'



function Form({setinputTxt, todos, setTodos, inputTxt, status, setStatus}) {

    const inputTextHandler = (e) =>{
        
        setinputTxt(e.target.value)
    }

    const submitHandle= (e) =>{
        e.preventDefault()
        setTodos([...todos,
            {text: inputTxt, completed: false, id: "todos-" + nanoid()}])
            setinputTxt("")

    }

     const statusHandler = (e) =>{
        setStatus(e.target.value)
     } 

    return(
    <> <form>
    <input type="text"
     className="todo-input"
     onChange = {inputTextHandler}
     value= {inputTxt} />
    <button className="todo-button" type="submit" onClick = {submitHandle}>
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select name="todos" className="filter-todo" onChange = {statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
    </>
    )
}

export default Form