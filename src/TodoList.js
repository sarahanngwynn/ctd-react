import React from "react";
import TodoListItem from './TodoListItem'
import style from "./TodoListItem.module.css";

  export default function TodoList({ todoList, onRemoveTodo }) {
    return (
    <ul  className={style.Checkbox}>
      {todoList.map((todo) => (
         <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
      ))}
   </ul>
     );
  }
    
  