import "./App.css";
import Todo from "./components/Todo.jsx";
import { Provider } from "react-redux";
import { store } from "./App/store.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
