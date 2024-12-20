import { useEffect, useState } from "react";
//import todosData from "./../../assets/todos.json";
import { TodoItem } from "./ToDoItem.jsx";
import s from "./TodoList.module.css";

export const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("todos"));
    if (savedData?.length) {
      return savedData;
    }
    return [];
  });
  const [newValue, setnewValue] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const addNewTodo = () => {
    const newTodo = {
      id: crypto.randomUUID,
      todo: newValue,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <div className={s.box}>
      <div className="flex">
        <input
          value={newValue}
          onChange={(e) => setnewValue(e.target.value)}
          placeholder="What do you need to do?"
          className={s.input}
          type="text"
        />
        <button className="btn border" onClick={addNewTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} onDeleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};
