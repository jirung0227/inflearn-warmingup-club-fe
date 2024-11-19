import React from "react";

export const Form = ({ value, setValue, handleSubmit }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className='flex pt-2' onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        name='value'
        className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
        style={{ flex: "10", padding: "5px" }}
        placeholder='할 일을 입력해주세요'
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input
        type='submit'
        value='입력'
        className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200'
      />
    </form>
  );
};
