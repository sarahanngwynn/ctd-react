import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  TodoListItem.propTypes = {
    onAddTodo: PropTypes.func,
};
  const handleRemoveTodo = (event) => {
    event.preventDefault();
       onRemoveTodo(todo.id);
 };
  return ( 
    <div>
      <div className={style.Space}></div>
    <li 
    className={style.ListItem}
    key={todo.id}>
      {todo.fields.Title} <span> </span>
      <button className={style.Button} 
    onClick={handleRemoveTodo}>
      Remove
      </button ></li>
    </div>
  );
}

export default TodoListItem



