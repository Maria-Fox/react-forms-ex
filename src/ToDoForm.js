import React, {useState} from "react";

const ToDoForm = ({addTodo}) => {

  let INITIALSTATE = {
    todo: ""
  };

  let [todoForm, setTodoForm] = useState(INITIALSTATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({...todoForm});
    setTodoForm(INITIALSTATE);
  };

  const handleChange = (e) => {
    let { name, value} = e.target; 

    setTodoForm({
      [name]: value
    });
  }

  return(
    <form onSubmit = {handleSubmit}>

      <label htmlFor = "todo"> Add a new todo item
        <input
        type = "text"
        id = "todo"
        value = {todoForm.todo}
        name = "todo"
        placeholder = "wash dishes"
        onChange = {handleChange}
        >
        </input>
      </label>

    <button type = "submit">Submit</button>

    </form>
  )
}

export default ToDoForm;
