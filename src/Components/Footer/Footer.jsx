function Footer({ todos }) {
  const total = todos.length;

  const completed = todos.filter((todo) => todo.completed).length;

  const remaining = total - completed;

  return (
    <footer className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-6 shadow-lg">

      <div className="grid grid-cols-3 gap-4">

        <div className="rounded-xl bg-slate-100 p-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-600">
            {total}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Total Tasks
          </p>
        </div>

        <div className="rounded-xl bg-slate-100 p-4 text-center">
          <h2 className="text-3xl font-bold text-green-600">
            {completed}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Completed
          </p>
        </div>

        <div className="rounded-xl bg-slate-100 p-4 text-center">
          <h2 className="text-3xl font-bold text-red-500">
            {remaining}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Remaining
          </p>
        </div>

      </div>

      <div className="my-6 border-t border-slate-200"></div>

      <div className="text-center text-sm text-slate-500">
        <p>
          Made with ❤️ by Ali Khaled
        </p>

        <p className="mt-1">
          React • Tailwind CSS • 2026
        </p>
      </div>

    </footer>
  );
}

export default Footer;