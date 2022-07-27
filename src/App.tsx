import React, { useEffect, useState, useMemo } from "react";

export type Todo = {
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<Todo[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = (await response.json()) as Todo[];
      setFilteredResults(data);
    };
    fetchData();
  }, []);

  const memo = useMemo(() => {
    const upSearchTerm = searchTerm.toUpperCase();
    return filteredResults?.filter((todo) => {
      let str = `${todo.id} ${todo.title} ${
        todo.completed === true ? "completed" : "incomplete"
      }`.toUpperCase();
      return str.indexOf(upSearchTerm) > -1;
    });
  }, [searchTerm, filteredResults]);

  return (
    <div className="App" style={{ padding: "0 50px" }}>
      {/* Without HOC */}
      {memo && (
        <>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search by id | title | completed | incomplete"
            style={{ width: "100%" }}
          />
          {memo.map((todo) => (
            <Row key={todo.id} todo={todo} />
          ))}
        </>
      )}
      {/* With HOC */}
    </div>
  );
}

export default App;
