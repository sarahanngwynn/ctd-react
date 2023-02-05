import React from "react";
import TodoListItem from './TodoListItem'
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

  export default function TodoList({ todoList, onRemoveTodo }) {
    TodoList.propTypes = {
      onAddTodo: PropTypes.func,
  };
    return (
    <ul  className={style.Checkbox}>
      {todoList.map((todo) => (
         <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
      ))}
   </ul>
     );
  }
    
  