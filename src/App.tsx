import React, { useEffect, useState } from "react";

type Todo = {
  id: string;
  title: string;
  description?: string;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://pokemon-worker.ubaidwani133.workers.dev/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data.todos || []);
  };

  const randomId = () => `todo_${Math.random().toString(36).slice(2, 9)}`;

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Generate random id here
    const newTodo = {
      id: randomId(),
      title,
      description,
    };

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    setTitle("");
    setDescription("");
    await fetchTodos();
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-400">Todo App</h1>

      {/* Add Todo */}
      <form
        onSubmit={addTodo}
        className="flex flex-col gap-2 mb-6 p-4 border rounded-lg shadow"
      >
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="border p-2 rounded"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-400"
        >
          {loading ? "Adding..." : "Add Todo"}
        </button>
      </form>

      {/* Show Todos */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="p-4 border rounded-lg shadow bg-gray-50"
          >
            <h2 className="font-semibold">{todo.title}</h2>
            {todo.description && (
              <p className="text-sm text-gray-600">{todo.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
