function TodoItem({ todo, handleDelete, handleToggle }) {
  return (
    <li className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
          className="h-5 w-5 cursor-pointer accent-indigo-600"
        />

        <span
          className={
            todo.completed
              ? "text-gray-400 line-through"
              : "font-medium text-slate-700"
          }
        >
          {todo.text}
        </span>

      </div>

      {/* Right Side */}
      <button
        onClick={() => handleDelete(todo.id)}
        className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-red-600 active:scale-95"
      >
        Delete
      </button>

    </li>
  );
}

export default TodoItem;