import React from "react";

const TodoListItem = (props) => {
  return (
    <li key={props.key}>{props.todo.title}</li>
  )
}

export default TodoListItem



