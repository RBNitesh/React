import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    console.log("Form submitted successfully!");
  }

  return (
    <div className="w-full h-screen bg-black text-white p-4 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label>First Name:</label>
          <input
            className="ml-2 border-1 border-white-600 border-solid rounded-md"
            {...register("firstName")}
          />
        </div>
        <div className="mb-4">
          <label>Middle Name:</label>
          <input
            className="ml-2 border-1 border-white-600 border-solid rounded-md"
            {...register("middleName")}
          />
        </div>
        <div className="mb-4">
          <label>Last Name:</label>
          <input
            className="ml-2 border-1 border-white-600 border-solid rounded-md"
            {...register("lastName")}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
