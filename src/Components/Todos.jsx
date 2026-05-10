import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todo/todoslice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return (
      <div className="text-center text-slate-400 italic py-8 text-lg font-medium">
        Your task list is beautifully empty.
      </div>
    )
  }

  return (
    <ul className="space-y-4 w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group flex justify-between items-center bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div className="text-slate-100 font-medium text-lg tracking-wide">
            {todo.text}
          </div>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-rose-400 hover:text-white border border-rose-500/50 hover:bg-rose-500 bg-transparent py-1.5 px-4 rounded-lg transition-all duration-300 opacity-80 group-hover:opacity-100 flex items-center justify-center font-bold"
            title="Delete Todo"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
