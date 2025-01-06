import { Trash } from "phosphor-react";
import React from "react";

const TodoItem = () => {
  return (
    <div>
      <input type="checkbox" />
      <span>Type to do here .. </span>
      <span>
        {" "}
        <Trash size={20} color="#ff0000" weight="fill" />
      </span>
    </div>
  );
};

export default TodoItem;
