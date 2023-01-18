import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  
  useEffect(() => {
   setIsLoading(true);
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
       },
      } 
    )
    .then((response) => response.json())
    .then((result) => {
      setIsLoading(false);
      console.log(result);
      setTodoList(result.records);
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  }, []);



useEffect(() => {
  if(isLoading === false) {
  const jsonTodoList = JSON.stringify(todoList);
  localStorage.setItem("savedTodoList", jsonTodoList);
}}, [todoList, isLoading]);

  const removeTodo = (id) => {
    console.log(id);
    const remove = todoList.filter((item) => item.id !== id);
setTodoList(remove)
  }
  const addTodo = (newTodo) => {
setTodoList([...todoList, newTodo]);
  }
      return (
       <BrowserRouter>
           <Routes>
       <Route path="/" element={
        <div><h1>Todo List</h1></div>
       } />
       
      <Route path="/new" element={
        <div><h1>New TodoList</h1></div>
       } />
       
      </Routes>
        <AddTodoForm onAddTodo={addTodo} />
        {isLoading ? (
          <p>... is Loading</p> 
        ) : (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
      <header>
        
        </header>
       
      </BrowserRouter>
      );
}
export default App;
