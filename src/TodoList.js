import React from "react";
import TodoListItem from './TodoListItem'

const todoList = [{
    id: 1,
    title: "Complete assignment"
  },
  {
    id: 3,
    title: "Meditate"
  },
  {
    id: 4,
    title: "Meal Plan"
  },
  ];
  export default function TodoList(){
    const listItems = todoList.map(function(todo) {
     return <TodoListItem key={todoList.id} todo={todo} />
    })
    return(
      <div key ={todoList.id}>
       <ul >{listItems}</ul>
      </div>
    );
    
  }