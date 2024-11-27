import React, { useState } from "react";

export const List = React.memo(
  ({ id, title, completed, provided, snapshot, todoData, setTodoData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const handleClick = (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
      // 객체나 배열을 저장해줄시에는 JSON.stringify()를 사용하여 문자열로 변환하여 저장해줘야한다.
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };

    const handleCompleChange = (id) => {
      const newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify([newTodoData]));
    };

    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div>
          <div
            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"}
                        flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
          >
            <div className='items-center'>
              <form>
                <input
                  value={editedTitle}
                  onChange={handleEditChange}
                  className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
                />
              </form>
            </div>
            <div>
              <button
                className='px-4 py-2 float-right'
                type='submit'
                onClick={handleSubmit}
              >
                save
              </button>
              <button
                className='px-4 py-2 float-right'
                onClick={() => setIsEditing(false)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      );
    } else {
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
            <div>
              <button
                className='px-4 py-2 float-right'
                onClick={() => handleClick(id)}
              >
                x
              </button>
              <button
                className='px-4 py-2 float-right'
                onClick={() => setIsEditing(true)}
              >
                edit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);
