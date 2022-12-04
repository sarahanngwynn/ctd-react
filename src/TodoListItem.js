import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const handleRemoveTodo = (event) => {
    event.preventDefault();
       onRemoveTodo(todo.id);
 };
  return ( 
    <div>
    <li key={todo.id} >{todo.title} <button onClick={handleRemoveTodo}>Remove</button></li>
    </div>
  );
}

export default TodoListItem



