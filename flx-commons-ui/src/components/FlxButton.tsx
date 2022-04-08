import React from "react";

function FlxButton(props) {
  return (
    <button
      type="submit"
      className="rounded-sm bg-pink-600 pb-2 pr-3 pt-2 pl-3 font-bold text-gray-800"
      onClick={() => props.handleSubmit()}
    >
      {props.buttonLabel}
    </button>
  );
}

export default FlxButton;
