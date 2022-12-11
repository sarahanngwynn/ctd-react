import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
   new Promise((resolve, reject ) => {
    setTimeout(() => resolve( 
      { data: {todoList: JSON.parse(localStorage.getItem("savedTodoList"))} }
    ), 2000);
   }).then((result)=> {
     setTodoList(result.data.todoList)
     setIsLoading(false);
   })
  }, [])


useEffect(() => {
  if(isLoading === false) {
  const jsonTodoList = JSON.stringify(todoList);
  localStorage.setItem("savedTodoList", jsonTodoList);
}}, [todoList, isLoading]);

//return [todoList, setTodoList];

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
