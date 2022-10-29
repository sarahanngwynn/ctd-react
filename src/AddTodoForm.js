import React from "react";

export default function AddTodoForm(props) {

    const handleAddTodo = (event) => {
       event.preventDefault();
        const todoTitle = event.target.title.value;
          props.onAddTodo(todoTitle);
         event.target.title.value = "";
    };
    return (
        <form onSubmit ={handleAddTodo}>
            <label>Title</label>
            <input name="title" id="todoTitle" htmlFor="todoTitle"></input>
            <button type="submit">Add</button>
        </form>
    )
}