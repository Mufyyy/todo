import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // uuidv4'ü içe aktar

const TodoField = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const handleClick = () => {
    addTodo({
      id: uuidv4(), // uuidv4'ü kullanabilirsiniz
      name: value,
      status: false,
    });
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className="todoField">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todoField_input"
      ></input>
      <button onClick={() => handleClick()} className="todoField_btn">
        add
      </button>
    </div>
  );
};

export default TodoField;
