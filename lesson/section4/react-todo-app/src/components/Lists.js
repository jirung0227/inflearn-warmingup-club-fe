import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { List } from "./List";
export const Lists = React.memo(({ todoData, setTodoData }) => {
  const handleDragEnd = (result) => {
    // 목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
    if (!result.destination) return;

    const newTodoData = Array.from(todoData);
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    newTodoData.splice(result.destination.index, 0, reorderedItem);

    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  };
  return (
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
  );
});
