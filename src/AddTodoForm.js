import React from "react";

export default function AddTodoFunction() {
    return (
        <form>
            <label>Title</label>
            <input id="todoTitle" htmlFor="todoTitle"></input>
            <button>Add</button>
        </form>
    )
}