export const TodoItem = ({ id, completed, todo, onDeleteTodo }) => {
  return (
    <li className="todo-item">
      <div className="input-box">
        <input className="checkbox" type="checkbox" />
        <span>{todo}</span>
      </div>
      <button onClick={() => onDeleteTodo(id)} className="btn border">
        Delete
      </button>
    </li>
  );
};
