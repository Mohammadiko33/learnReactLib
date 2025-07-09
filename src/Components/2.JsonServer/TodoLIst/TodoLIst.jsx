import React, { useEffect, useState } from "react";

import "./TodoLIst.css";
import Todo from "./Todo";
import { toast, ToastContainer } from "react-toastify";
import headerFetch from "../../headerFetch";

export default function TodoLIst() {
  const [todoTexT, setTodoTexT] = useState("");
  const [option, setOption] = useState("all");
  const [allTodos, setAllTodos] = useState([]);
  const [displayTodo, setDisplayTodo] = useState([]);
  const mainUrl = "http://localhost:4000/todos";

  const allOption = ["all", "completed", "in complete"];

  const getTodos = async () => {
    const res = await fetch(mainUrl);

    if (!res.ok) {
      return toast.error("you have the error", { position: "bottom-right" });
    }

    const allDataTodos = await res.json();
    setAllTodos(allDataTodos);
    setDisplayTodo(allDataTodos);
  };
  useEffect(() => {
    getTodos();
  }, []);

  const addTodoHandler = async (e) => {
    e.preventDefault();
    console.log(todoTexT);
    if (todoTexT.length > 3) {
      const res = await fetch(mainUrl, {
        method: "POST",
        headers: headerFetch,
        body: JSON.stringify({ title: todoTexT, isDone: false }),
      });
      if (!res.ok) {
        return toast.error("you have the error", { position: "bottom-right" });
      } else {
        getTodos();
        setTodoTexT("");
        return toast.success("تودو با موفقیت ثبت شد", {
          position: "bottom-right",
          className: "fdana",
          draggable: true,
          rtl: true,
        });
      }
    }
  };

  const deleteTodoHandler = async (id) => {
    await fetch(`${mainUrl}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        return toast.error("you have the error", { position: "bottom-right" });
      } else {
        getTodos();
        return toast.success("تودو با موفقیت حذف شد", {
          position: "bottom-right",
          className: "fdana",
          draggable: true,
          rtl: true,
        });
      }
    });
  };

  const complateTodoHandler = async (todoID , todoTitle , todoIsDone) => {
    await fetch(`${mainUrl}/${todoID}`, {
      method: "PUT",
      headers: headerFetch,
      body: JSON.stringify({
        isDone: !todoIsDone,
        title: todoTitle,
      }),
    }).then((res) => {
      if (!res.ok) {
        return toast.error("you have the error", { position: "bottom-right" });
      } else {
        getTodos();
        return toast.success(
          `${
            !todoIsDone
              ? "تودو انجام شد"
              : "تودو از حالت انجام در امد"
          }`,
          {
            position: "bottom-right",
            className: "fdana",
            draggable: true,
            rtl: true,
          }
        );
      }
    });
  };

  useEffect(() => {
    switch (option) {
      case "all": {
        setDisplayTodo(allTodos);
        break;
      }
      case "completed": {
        setDisplayTodo(allTodos.filter((todo) => todo.isDone));
        break;
      }
      case "in complete": {
        setDisplayTodo(allTodos.filter((todo) => !todo.isDone));
        break;
      }
      default: {
        setDisplayTodo(allTodos);
      }
    }
  }, [option]);

  return (
    <>
      <ToastContainer />
      <header>
        <h1>Sabzlearn To Do List</h1>
      </header>
      <form action="" onSubmit={addTodoHandler}>
        <input
          type="text"
          className="todo-input"
          placeholder="add a todo..."
          value={todoTexT}
          onChange={(e) => setTodoTexT(e.target.value)}
        />
        <button
          className="todo-button hcwhite"
          type="submit"
          onClick={addTodoHandler}
          onSubmit={addTodoHandler}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="btnSVG"
          >
            <path
              d="M12 5V19"
              stroke="#7D7C7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="#7D7C7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo tt"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            {allOption.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {displayTodo.length ? (
            <>
              {displayTodo.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onDelete={deleteTodoHandler}
                  onComplate={complateTodoHandler}
                />
              ))}
            </>
          ) : (
            <div className="tc fs2"> هیچ تودویی وجود ندارد</div>
          )}
        </ul>
      </div>
    </>
  );
}
