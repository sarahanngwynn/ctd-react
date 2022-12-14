import React from "react";
import { useState } from 'react';
import InputWithLabel from "./InputWithLabel"

export default function AddTodoForm({ onAddTodo }) {
const[todoTitle, setTodoTitle] = useState("");

const handleTitleChange = (event) => {
const newTodoTitle = event.target.value;
setTodoTitle(newTodoTitle);

}

    const handleAddTodo = (event) => {
       event.preventDefault();
          onAddTodo({ 
              createdTime: Date.now(),
              fields: { Title: todoTitle },
              id: Date.now(),
                });
          setTodoTitle("");
    };
   
    return (
        <form onSubmit ={handleAddTodo }>
           < InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title</InputWithLabel>
           
        </form>
    )
}