import React from "react";
import ModalPortal from "./ModalPortal";
import { useForm } from "react-hook-form";

const EditForm = ({ onClose, editingText, setEditingText, saveEdit }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <ModalPortal>
      <div className="z-30 fixed inset-0 bg-black/5 backdrop-blur-sm text-white flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="relative rounded-md w-[80%] h-auto flex flex-col gap-4 p-4 max-w-xl"
        >
          <div className="absolute inset-0 rounded-md bg-white/10" />
          <div className="flex flex-col gap-2">
            <label htmlFor="todo" className="text-xl">
              Add Todo:
            </label>
            <input
              type="text"
              value={editingText.todo}
              onChange={(e) =>
                setEditingText({ ...editingText, todo: e.target.value })
              }
              id="todo"
              className="border border-white/20 rounded-md z-40 p-2 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-xl">
              Pick a date:
            </label>
            <input
              type="date"
              id="date"
              value={editingText.date}
              onChange={(e) =>
                setEditingText({ ...editingText, date:e.target.value })
              }
              className="border border-white/20 rounded-md z-40 p-2 outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              onClick={() => saveEdit()}
              className="z-40 border border-white/20 rounded-md p-2 w-1/3"
            >
              Save
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

export default EditForm;
