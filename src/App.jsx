import React from "react";
import Card from "./components/Card";
import AddIcon from "./components/ui/AddIcon";
import AddTodo from "./components/AddTodo";
import { useState } from "react";
import DisplayTodo from "./components/DisplayTodo";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditForm from "./components/EditForm";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState({
    id: "",
    todo: "",
    date: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState({
    todo: "",
    date: "",
  });
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([
    {
      id: "1",
      todo: "Task 1",
      date: "",
      checked: false,
    },
    {
      id: "2",
      todo: "Task 2",
      date: "",
      checked: false,
    },
    {
      id: "3",
      todo: "Task 3",
      date: "",
      checked: false,
    },
  ]);

  const add = (data) => {
    if (!data) return;
    const newItem = [
      ...todos,
      {
        id: String(todos.length + 1),
        todo: data.todo,
        date: data.date,
        checked: false,
      },
    ];
    console.log(newItem[newItem.length - 1].date);
    setTodos(newItem);
    setOpenModal(!openModal);
  };

  const completed = (id) => {
    const update = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    );
    setTodos(update);
    setTimeout(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }, 1500);
  };

  const remove = (id) => {
    const deleted = todos.filter((item) => String(item.id) !== String(id));
    if (!deleted) return;
    setTodos(deleted);
  };

  const save = () => {
    const edited = todos.map((todo) =>
      todo.id === editingId
        ? {
            ...todo,
            todo: editingText.todo,
            date: editingText.date,
          }
        : todo,
    );
    setTodos(edited);
    setEditingId("");
  };

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Header />
      <div className="relative bg-black h-screen w-screen min-h-screen text-white flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-white/10" />
        <SearchBar search={search} setSearch={setSearch} />
        {!todos.length ? <p>What are you upto today !</p> : ""}
        <DisplayTodo
          todos={filteredTodos}
          completed={completed}
          remove={remove}
          editingId={editingId}
          setEditingId={setEditingId}
        />
        <AddIcon onClick={() => setOpenModal(!openModal)} />
        {openModal && (
          <AddTodo
            input={input}
            setInput={setInput}
            onClose={() => setOpenModal(!openModal)}
            add={add}
          />
        )}
        {editingId && (
          <EditForm
            editingText={editingText}
            setEditingText={setEditingText}
            saveEdit={save}
            onClose={() => setEditingId(false)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
