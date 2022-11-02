import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <header>
         <h1>Todo List</h1>
        </header>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList}/>
    </div>
  )
}

export default App;
