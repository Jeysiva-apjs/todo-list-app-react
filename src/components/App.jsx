import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  function updateTodo(event) {
    setTodo(event.target.value);
  }

  function addTodo() {
    setItems([...items, todo]);
    setTodo("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateTodo} type="text" value={todo} />
        <button>
          <span onClick={addTodo}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
