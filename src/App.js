import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';

function useSemiPersistentState() {
  const todoString = localStorage.getItem("savedTodoList");
  const parsedArray = JSON.parse(todoString);
  const [todoList, setTodoList] = useState(parsedArray);

useEffect(() => {
  const jsonTodoList = JSON.stringify(todoList);
  localStorage.setItem("savedTodoList", jsonTodoList);
}, [todoList]);
return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
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
