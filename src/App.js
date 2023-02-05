import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";
//import TodoContainer from "./components/TodoContainer";
//mport { Nav, NavLink } from "./NavbarElements";


function App() {
 
  return (

    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <h1 className={style.Title}>Todo List</h1>
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
     
      <header></header>
    </BrowserRouter>
  );
}
export default App;
