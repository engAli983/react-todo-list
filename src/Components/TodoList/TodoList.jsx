import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todos, handleDelete, handleToggle }) {
  if (todos.length === 0) {
    return (
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-10 text-center shadow-xl">
        <div className="mb-4 text-6xl">🚀</div>

        <h2 className="text-2xl font-bold text-slate-700">
          No tasks yet
        </h2>

        <p className="mt-2 text-slate-500">
          Start by adding your first task.
        </p>
      </div>
    );
  }

  return (
    <ul className="mx-auto mt-8 max-w-3xl space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
}

export default TodoList;