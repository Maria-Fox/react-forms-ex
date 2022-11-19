import React, {useState} from "react";

const Todo = ({todo, handleDelete}) => {
  return(
    <li>
      {todo}
      <button onClick = {handleDelete}>X</button>
    </li>
  )
}

export default Todo;