import React, { useState } from "react";

import "./App.css";
import { Form } from "./components/Form";
import { Lists } from "./components/Lists";
const initTodoData = localStorage.getItem("todoData");

export default function App() {
  const [todoData, setTodoData] = useState(
    initTodoData ? JSON.parse(initTodoData) : []
  );
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodoData]);
    localStorage.setItem(
      "todoData",
      JSON.stringify([...todoData, newTodoData])
    );
    setValue("");
  };

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1 className='text-3xl font-bold '>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <div>
          <Lists todoData={todoData} setTodoData={setTodoData} />
        </div>

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
