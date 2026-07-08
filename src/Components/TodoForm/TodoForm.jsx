import { useState } from "react";

function TodoForm({ handleAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim() === "") return;

    const cleanTask = task.trim();

    handleAdd(cleanTask);
    setTask("");
  };

  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-8 shadow-xl">
      
      {/* Title */}
      <h2 className="mb-2 text-center text-4xl font-extrabold text-slate-800">
        My Tasks
      </h2>

      {/* Description */}
      <p className="mb-8 text-center text-slate-500">
        Add, complete and organize your daily tasks.
      </p>

      {/* Input Section */}
      <div className="flex flex-col gap-3 sm:flex-row">
        
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-lg outline-none transition-all focus:border-indigo-600 focus:ring-4 focus:ring-indigo-200"
        />

        <button
          onClick={handleSubmit}
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-700 active:scale-95"
        >
          ➕ Add Task
        </button>

      </div>

    </div>
  );
}

export default TodoForm;