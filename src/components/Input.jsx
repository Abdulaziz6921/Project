import React from "react";

const Input = ({ name, defaultValue, innerRef }) => {
  let stl = {
    label: "flex flex-col items-start mb-4",
    labelFor: "text-white mb-1 text-lg",
    input: "bg-gray-800 text-white rounded-md indent-2 text-lg py-1 w-[100%] ",
  };
  return (
    <div>
      <label className={stl.label}>
        <p className={stl.labelFor}>{name}</p>
        <input
          type="text"
          className={stl.input}
          defaultValue={defaultValue}
          ref={innerRef}
        />
      </label>
    </div>
  );
};

export default Input;
