function TodoItem({ task }) {
  return (
    <li className="todo-item">
      <span className="todo-check" aria-hidden="true">
        ✓
      </span>
      <span>{task}</span>
    </li>
  );
}

export default TodoItem;
