import React, { useState } from "react";

import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";
export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodoData]);
    setValue("");
  };

  return (
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}