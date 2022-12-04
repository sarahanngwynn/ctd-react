import React from "react";
import { useRef } from "react";

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
            value = {todoTitle} 
            onChange = {handleTitleChange} 
            name="title" 
            id="todoTitle" 
            ref={inputRef}
            ></input>
             <button type="submit">Add</button>
        </div>
    )
  //  return [todoTitle, handleTitleChange];
}