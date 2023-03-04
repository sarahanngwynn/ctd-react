import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import TodoContainer from "./components/TodoContainer";
//import TodoContainer from "./components/TodoContainer";
//mport { Nav, NavLink } from "./NavbarElements";


const App = () => {
 
  return (

    <BrowserRouter>
      <Routes>
      <Route
          exact
          path="/"
          element={
            <div>
              <h1 className={style.Title}>Welcome to your TodoList</h1>
             <a href="/new"> <button className={style.Button}> Begin Your List</button></a>
            </div>
          }
        />
        
        <Route
          path="/new"
          element={
            <div>
              <h1>New TodoList</h1>
              <TodoContainer tableName=""/>
              <a href="/"><button className={style.Button}>Return to Homepage</button></a>
            </div>
          }
        />
      </Routes>
     
      <header></header>
    </BrowserRouter>
    
  );
  
}
export default App;
