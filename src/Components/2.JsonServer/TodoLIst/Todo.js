import React from "react";
import TrashSVG from "./SVGs/TrashSVG"
import TickSVG from "./SVGs/TickSVG"

export default function Todo({id , isDone , title , onDelete , onComplate}) {

  console.log(id , isDone , title)

  return (
    <div className={`todo ${isDone ? "completed" : ""}`}>
      <li className="todo-item ">{title}</li>
      <button className="complete-btn djac h100" onClick={() => onComplate(id , title , isDone)}>
        <TickSVG fill="#fff" width={30} height={30}/>
      </button>
      <button className="trash-btn djac h100" onClick={() => onDelete(id)}>
        <TrashSVG fill="#fff" width={30} height={30}/>
      </button>
    </div>
  );
}
