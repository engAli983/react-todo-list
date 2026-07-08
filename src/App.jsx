import Navbar from "./Components/Navbar/Navbar";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {

  // 
    const [todos, setTodos] = useState([]);

    // 
    const handleAdd = (task) => {
      const newTodo = {
        id: Date.now(),
        text: task,
        completed: false
      }

      // 
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    const handleDelete = (id) => {
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== id)
      );
    };

    const handleToggle = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};

  return (
    <>
      <div className="min-h-screen bg-slate-100">
    <Navbar />

    <TodoForm handleAdd={handleAdd} />

    <TodoList
      todos={todos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />

    <Footer todos={todos} />
  </div>
    </>
  );
}

export default App;