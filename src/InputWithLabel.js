import React from "react";
import { useRef } from "react";
import style from "./TodoListItem.module.css";

export default function InputWithLabel({ todoTitle, handleTitleChange, children}) {
        const inputRef = useRef();
        React.useEffect(() => {
            inputRef.current.focus();
        }, [todoTitle]); 
    return (
        <div>
             <label 
            htmlFor="todoTitle">
                {children}
                </label>
            <input 
            className={style.input}
            value = {todoTitle} 
            onChange = {handleTitleChange} 
            name="title" 
            id="todoTitle" 
            ref={inputRef}
            ></input>
             <button className={style.inputButton} type="submit">Add</button>
        </div>
    )
  //  return [todoTitle, handleTitleChange];
}