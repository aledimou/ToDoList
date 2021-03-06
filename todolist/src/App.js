import React,{useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import Todo from './components/Todo';
import Todolist from "./components/Todolist"


function App() {

  const [inputTxt, setinputTxt] = useState("")
  const [todos, setTodos]  = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodolist, setFilterTodolist] = useState([])

  useEffect(() => {
    filterHandler()
    
  }, [todos, status])

  const filterHandler = ()=>{
    switch (status) {
      case "completed":
        setFilterTodolist(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodolist(todos.filter(todo => todo.completed === false))
        break;
        default:
        setFilterTodolist(todos)
        break;
    }
  }

  return (
    <>
      <header>
        <h1>To Do App </h1>
      </header>
      <Form
       setinputTxt = {setinputTxt}
       setTodos = {setTodos}
        inputTxt = {inputTxt}
        todos = {todos}
        status = {status}
        setStatus = {setStatus}
        
        />
        
      <Todolist todos = {todos} setTodos = {setTodos} filterTodolist = {filterTodolist}
        setFilterTodolist = {setFilterTodolist}  />
      
    </>
  );
}

export default App;
