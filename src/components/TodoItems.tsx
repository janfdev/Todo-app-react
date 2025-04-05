import { IoIosRadioButtonOff } from "react-icons/io";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

type PropsTodoItems = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const TodoItems = ({ text, completed, onToggle, onDelete }: PropsTodoItems) => {
  return (
    <div className="flex items-center justify-between my-5 gap-2">
      <div
        onClick={onToggle}
        className="flex flex-1 items-center gap-2 cursor-pointer"
      >
        {completed ? (
          <FaCheckCircle className="text-3xl text-green-500" />
        ) : (
          <IoIosRadioButtonOff className="text-3xl text-gray-400" />
        )}
        <p
          className={`text-lg ml-4 ${
            completed ? "line-through text-gray-400" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 p-2 rounded-xl hover:bg-red-600 transition duration-200 ease-in-out cursor-pointer"
      >
        <FaTrash className="text-lg text-white" />
      </button>
    </div>
  );
};

export default TodoItems;
