import React from "react";

export const List = ({
  id,
  title,
  completed,
  provided,
  snapshot,
  todoData,
  setTodoData,
}) => {
  const handleClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompleChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"}
                        flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
      >
        <div className='items-center'>
          <input
            type='checkbox'
            defaultChecked={false}
            onChange={() => handleCompleChange(id)}
          />
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <button
          className='px-4 py-2 float-right'
          onClick={() => handleClick(id)}
        >
          x
        </button>
      </div>
    </div>
  );
};
