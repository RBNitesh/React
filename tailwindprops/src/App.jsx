import "./App.css";

import Student from "./Components/Student.jsx";

function App() {
  return (
    <>
      <h1 className="bg-blue-300 text-orange-200 rounded-2xl">Tailwind CSS</h1>
      <Student name="Ajeet" age={22} isStudent={true} />
      <Student name="Mithun" age={35} isStudent={false} />
      <Student name="Chandani" age={18} isStudent={true} />
    </>
  );
}

export default App;
