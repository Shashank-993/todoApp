import React from "react";
import ModalPortal from "./ModalPortal";
import { useForm } from "react-hook-form";

const AddTodo = ({onClose, add }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    add(data);
  };

  return (
    <ModalPortal>
      <div className="z-30 fixed inset-0 bg-black/5 backdrop-blur-sm text-white flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative rounded-md w-[80%] h-auto flex flex-col gap-4 p-4 max-w-xl"
        >
          <div className="absolute inset-0 rounded-md bg-white/10" />
          <div className="flex flex-col gap-2">
            <label htmlFor="todo" className="text-xl">
              Add Todo:
            </label>
            <input
              type="text"
              id="todo"
              className="border border-white/20 rounded-md z-40 p-2 outline-none"
              {...register("todo", { required: "Todo is required!" })}
            />
            {errors.todo && (
              <p className="text-sm text-red-500">{errors.todo.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-xl">
              Pick a date:
            </label>
            <input
              type="date"
              id="date"
              className="border border-white/20 rounded-md z-40 p-2 outline-none"
              {...register("date", { required: "date is required!" })}
            />
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="z-40 border border-white/20 rounded-md p-2 w-1/3"
            >
              Submit
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="z-40 border border-white/20 rounded-md p-2 w-1/3"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ModalPortal>
  );
};

export default AddTodo;
