import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import PropTypes from "prop-types";

function TodoContainer(props) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, // 
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
       console.log(data.records);
        data.records.sort(function(objectA, objectB) {
      
          if (objectA.fields.Name < objectB.fields.Name) return 1;
          if (objectA.fields.Name > objectB.fields.Name) return -1;
           return 0;
        
        })
    
        setIsLoading(false);
        console.log(data);
        setTodoList(data.records || []);
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
     <div>
         <h1>{props.tableName}</h1>
         <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>... is Loading</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
     </div>
 );
}
TodoContainer.propTypes = {
  tableName: PropTypes.string,
};
export default TodoContainer;
