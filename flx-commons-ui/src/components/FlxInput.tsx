import React from "react";

function FlxInput(props) {
  return (
    <div className="flex">
      <label className="rounded rounded-r-none bg-gray-500 p-2 font-bold text-gray-800">
        Username
      </label>
      <input
        className="rounded-sm rounded-l-none bg-gray-400 p-2 outline-none"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleOnChange}
      />
    </div>
  );
}

export default FlxInput;
