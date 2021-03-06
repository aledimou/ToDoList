import React from "react"
import Todo from "../components/Todo"

function Todolist({todos, setTodos, filterTodolist}) {
    return( <><div className="todo-container">
    <ul className="todo-list">
        {filterTodolist.map(todo => <Todo 
        text = {todo.text} 
        key = {todo.id} 
        todos = {todos} 
        setTodos = {setTodos}
        todo = {todo}   
        />)}
    </ul>
  </div>
   </>
   );
}

export default Todolist