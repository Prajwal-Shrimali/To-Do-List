import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInputItem(value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
    setInputItem("");
  }

  function addItemEnter(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  function deleteItem(id) {
    console.log("Clicked", id);
    setItems(prevValue => {
      return prevValue.filter((item, index) => {
        return index !== id;
      }
      )
    });
  }

  return (
    <div className="container" onKeyDown={addItemEnter}>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea handleChange={handleChange} addItem={addItem} inputItem={inputItem} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <ToDoItem key={index} id={index} text={item} onChecked={deleteItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
