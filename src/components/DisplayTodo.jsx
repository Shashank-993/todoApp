import React from "react";
import CheckBox, { Checkbox } from "./ui/CheckBox";
import { Trash } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Pen } from "lucide-react";

const DisplayTodo = ({
  todos,
  remove,
  setEdit,
  completed,
  editingId,
  setEditingId,
}) => {
  return (
    <div className="mt-5 w-[80%] h-[80%] space-y-8 max-w-xl">
      {!todos ? (
        <p>No search found!</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className={
              todo.checked
                ? "relative border border-green-500/40 rounded-md p-4 flex justify-between items-center "
                : "relative border border-white/10 rounded-md p-4 flex justify-between items-center "
            }
          >
            <div className="absolute inset-0 bg-white/5 rounded-md" />

            <p
              className={
                todo.checked
                  ? "absolute -bottom-4.5 right-0 text-xs text-green-500"
                  : "absolute -bottom-4.5 right-0 text-xs"
              }
            >
              {todo.checked
                ? "Completed"
                : todo.date
                  ? `Complete by ${todo.date}`
                  : "No deadline!"}
            </p>

            <div className="flex items-center gap-2.5">
              <CheckBox
                role="button"
                onClick={() => completed(todo.id)}
                className="h-4.5 w-4.5 bg-transparent border-2 border-white/10"
              />

              <h1
                className={
                  todo.checked ? "text-green-500 text-lg" : "text-white text-lg"
                }
              >
                {todo.todo}
              </h1>
            </div>

            <div className="flex items-center gap-2.5">
              <Pen
                role="button"
                onClick={() => setEditingId(todo.id)}
                color="#FFF"
                className="cursor-pointer z-20"
                size={18}
                strokeWidth={1}
              />

              <Trash2
                role="button"
                className="z-20 hover:cursor-pointer"
                onClick={() => remove(todo.id)}
                color="#FFF"
                size={18}
                strokeWidth={1}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayTodo;
