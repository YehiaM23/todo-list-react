interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li
      style={{
        margin: "10px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          flex: 1,
          textAlign: "left",
        }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          style={{ marginRight: "10px" }}
        />
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
