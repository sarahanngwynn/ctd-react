import React from "react";
import { useRef } from "react";
import style from "./Input.module.css";
import PropTypes from "prop-types";

export default function InputWithLabel({ todoTitle, handleTitleChange, children}) {
    InputWithLabel.propTypes = {
        onAddTodo: PropTypes.func,
    };
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
                <span> </span>
            <input 
            className={style.input}
            value = {todoTitle} 
            onChange = {handleTitleChange} 
            name="title" 
            id="todoTitle" 
            ref={inputRef}
            ></input><span> </span>
             <button className={style.inputButton} type="submit">Add</button>
        </div>
    )
  //  return [todoTitle, handleTitleChange];
}