import { RiMastodonLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import TodoItems from "./TodoItems";
const Todo = () => {
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
          className="border px-2 py-3 rounded-md
          w-full focus:outline-none focus:border-2 focus:border-blue-500 border-gray-300"
          placeholder="Add your task"
        />
        <button className="flex items-center gap-2 bg-blue-500 py-3 px-5 rounded-md text-white">
          <span className="md:text-xl text-lg md:block hidden ">Add</span>
          <span>
            <FaCirclePlus className="md:text-xl text-2xl" />
          </span>
        </button>
      </div>

      {/* --------- TodoList ----------- */}
      <div>
        <TodoItems text="cihuyy" />
        <TodoItems text="Learn Coding" />
      </div>
    </div>
  );
};

export default Todo;
