import { useState } from "react";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <input
        type="text"
        value={text}
        placeholder="Add a new task..."
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "60%" }}
      />
      <button type="submit" style={{ padding: "8px 16px", marginLeft: "10px" }}>
        ➕ Add
      </button>
    </form>
  );
}

export default AddTodo;
