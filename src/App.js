import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';

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
  };

       if (isLoading === true) {
      return (
      <div> <p>Loading...</p> </div>
      )
       } else {
      return (
       <div>
        <header>
         <h1>Todo List</h1>
        </header>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
      )
    }
}
export default App;
