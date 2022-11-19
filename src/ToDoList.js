import React, {useState} from "react";
import ToDoForm from "./ToDoForm";
import Todo from "./Todo";
import { v4 as uuid } from 'uuid';


const ToDoList = () => {

  let INITIALSTATE = [
    {
      todo: "clean the house",
      id: uuid()
    },
    {
      todo: "study",
      id: uuid()
    },
    {
      todo: "work on react stuff",
      id: uuid()
    }
    ]

  let [todos, setTodos] = useState(INITIALSTATE);

  const addTodo = (newTodo) => {
    console.log(newTodo);
    setTodos(todos => [...todos, {...newTodo, id: uuid()} ]);
  }

  const handleDelete = (TodoId) => {
    let newTodos = todos.filter(todosToKeep => todosToKeep.id != TodoId);
    setTodos([...newTodos]);
  };


  return(
    <div style = {{backgroundColor : "peachpuff"}}>
      <p>Todo List</p>
      <ToDoForm addTodo = {addTodo}/>
      <ul>
        {todos.map(({todo, id}) => <Todo todo = {todo} handleDelete = {() => handleDelete(id)} key= {id}/>)}
      </ul>
    </div>
  )
}

export default ToDoList;