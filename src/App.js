import React from 'react';

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

function App() {
  const listItems = todoList.map(function(item) {
    return <li key = {item.id}>{item.title}</li>
  })
  return (
    <div >
      <header>
       <h1>Todo List</h1>
      </header>
      <ul>{listItems}</ul>
    </div>
  );
  
}

export default App;
