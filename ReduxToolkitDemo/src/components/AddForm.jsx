import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    if (task.trim().length === 0) {
      alert("please enter a valid task");
      return;
    }
    dispatch(addTodo(task));
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default AddForm;
