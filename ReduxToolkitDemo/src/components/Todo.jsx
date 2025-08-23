import { useSelector } from "react-redux";
import AddForm from "./AddForm.jsx";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice.js";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    console.log("delete task");
    dispatch(deleteTodo(id));
  };

  const markTask = (id) => {
    console.log(`task with id:${id} is marked as done`);
    dispatch(markAsDone());
  };

  return (
    <>
      <AddForm />
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} <button onClick={() => deleteTask(todo.id)}> X </button>{" "}
            <button onClick={() => markTask(todo.id)}> mark </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
