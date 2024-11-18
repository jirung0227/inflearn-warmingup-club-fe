import React from "react";

export const Form = ({ value, setValue, handleSubmit }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='value'
          style={{ flex: "10", padding: "5px" }}
          placeholder='할 일을 입력해주세요'
          value={value}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='submit'
          value='추가'
          className='btn'
          style={{ flex: "1" }}
        />
      </form>
    </div>
  );
};
