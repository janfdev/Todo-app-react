import { RiMastodonLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import TodoItems from "./TodoItems";
import { useRef, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const Todo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const inputText = inputRef.current?.value.trim();
    if (!inputText) return;

    if (todoList.some((todo) => todo.text === inputText)) {
      alert("Task already exists!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false
    };

    setTodoList((prev) => [...prev, newTodo]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const toggleComplete = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* ------ title ------ */}
      <div className="flex items-center mt-7 gap-4">
        <div className="bg-blue-500 p-3 rounded-xl">
          <RiMastodonLine className="text-3xl text-white" />
        </div>
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* --------- input box ----------- */}
      <div
        className="flex items-center mt-4
      justify-between w-full gap-2"
      >
        <input
          type="text"
          ref={inputRef}
          className="border px-2 py-3 rounded-md
          w-full focus:outline-none focus:border-2 focus:border-blue-500 border-gray-300"
          placeholder="Add your task"
        />
        <button
          onClick={addTodo}
          className="flex items-center gap-2 bg-blue-500 py-3 px-5 rounded-md text-white"
        >
          <span className="md:text-xl text-lg md:block hidden ">Add</span>
          <span>
            <FaCirclePlus className="md:text-xl text-2xl" />
          </span>
        </button>
      </div>

      {/* --------- TodoList ----------- */}
      <div className="mt-6 space-y-3">
        {todoList.length === 0 ? (
          <p className="text-gray-500 italic text-center">No Tasks yet.</p>
        ) : (
          todoList.map((todo) => (
            <TodoItems
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onToggle={() => toggleComplete(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
