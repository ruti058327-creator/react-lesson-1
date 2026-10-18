import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

const initialTodos = [
  'לסדר את שולחן העבודה',
  'לקרוא פרק בספר',
  'לצאת להליכה',
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTodo = newTodo.trim();
    if (!trimmedTodo) {
      setError('יש להזין משימה לפני ההוספה.');
      return;
    }

    const alreadyExists = todos.some(
      (todo) => todo.toLocaleLowerCase() === trimmedTodo.toLocaleLowerCase(),
    );
    if (alreadyExists) {
      setError('המשימה הזו כבר נמצאת ברשימה.');
      return;
    }

    setTodos((currentTodos) => [...currentTodos, trimmedTodo]);
    setNewTodo('');
    setError('');
  }

  return (
    <section className="todo-card" aria-labelledby="todo-heading">
      <header className="todo-header">
        <span className="todo-eyebrow">היום שלך, מסודר</span>
        <h1 id="todo-heading">רשימת המשימות שלי</h1>
        <p>משימה קטנה בכל פעם — ואת בדרך להצלחה.</p>
      </header>

      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="new-todo">משימה חדשה</label>
        <div className="todo-form-row">
          <input
            id="new-todo"
            type="text"
            value={newTodo}
            onChange={(event) => {
              setNewTodo(event.target.value);
              if (error) setError('');
            }}
            placeholder="מה תרצי להספיק?"
            aria-describedby={error ? 'todo-error' : undefined}
          />
          <button type="submit">אישור</button>
        </div>
        <p id="todo-error" className="form-message" aria-live="polite">
          {error}
        </p>
      </form>

      <div className="list-heading">
        <h2>המשימות שלך</h2>
        <span className="todo-count">{todos.length}</span>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo} task={todo} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
