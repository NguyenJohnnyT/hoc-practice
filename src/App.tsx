import React, { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Row: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <>
      <h4>{todo.title}</h4>
      <h5>
        Completed?
        {todo.completed ? "✔️" : "❌"}
      </h5>
    </>
  );
};

function App() {
  const [json, setJson] = useState<Todo[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = (await response.json()) as Todo[];
      setJson(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">{json && json.map((todo) => <Row todo={todo} />)}</div>
  );
}

export default App;
