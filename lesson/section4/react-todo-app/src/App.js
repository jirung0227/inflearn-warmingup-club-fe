import React, { useState } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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

  const handleDragEnd = (result) => {
    // 목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
    if (!result.destination) return;

    const newTodoData = Array.from(todoData);
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    newTodoData.splice(result.destination.index, 0, reorderedItem);

    setTodoData(newTodoData);
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1 className='text-3xl font-bold '>할 일 목록</h1>
        </div>
        <div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='todo'>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {todoData.map((data, index) => (
                    <Draggable
                      key={data.id}
                      draggableId={data.id.toString()}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <List
                          key={data.id}
                          id={data.id}
                          title={data.title}
                          completed={data.completed}
                          todoData={todoData}
                          setTodoData={setTodoData}
                          provided={provided}
                          snapshot={snapshot}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
