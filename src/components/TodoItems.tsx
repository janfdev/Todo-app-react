import { IoIosRadioButtonOff } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const TodoItems = ({text}) => {
  return (
    <div className="flex items-center justify-between my-5 gap-2">
      <div className="flex flex-1 items-center gap-2">
        <FaCheckCircle className="text-3xl text-green-500" />
        <p className="text-slate-700 ml-4 text-lg">{text}</p>
      </div>
      <button className="bg-red-500 p-2 rounded-xl hover:bg-red-600 transition duration-200 ease-in-out cursor-pointer">
        <FaTrash className="text-lg text-white" />
      </button>
    </div>
  );
};

export default TodoItems;
