import React from "react";

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
    const listItems = todoList.map(function(item) {
      return <li key = {item.id}>{item.title}</li>
    })
    return (
      <div >
        <ul>{listItems}</ul>
      </div>
    );
    
  }