import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
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
    if (isLoading === false) {
      const jsonTodoList = JSON.stringify(todoList);
      localStorage.setItem("savedTodoList", jsonTodoList);
    }
  }, [todoList, isLoading]);

  const removeTodo = (id) => {
    console.log(id);
    removeItem(id)
    let remove = todoList.filter((item) => item.id !== id);
    setTodoList(remove);
  };
  const removeItem = (id) => {
  fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }
  ).then((r) => r.json());
};
  
  const addTodo = (newTodo) => {
    addItem(newTodo);
    setTodoList([...todoList, newTodo]);
  };
  const addItem = (todoItem) => {
    const body = {
      records: [
        {
          fields: {
            Title: todoItem.fields.Title,
          },
        },
      ],
    };

    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    ).then((r) => r.json());
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <h1>Todo List</h1>
            </div>
          }
        />

        <Route
          path="/new"
          element={
            <div>
              <h1>New TodoList</h1>
            </div>
          }
        />
      </Routes>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>... is Loading</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      <header></header>
    </BrowserRouter>
  );
}
export default App;
