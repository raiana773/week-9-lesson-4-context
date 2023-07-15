import React, { useContext, useEffect } from "react";
import { todoContext } from "../../contexts/todoContext";

const List = () => {
  const { getTodos, todos } = useContext(todoContext);
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {todos.map((item) => (
        <div key={item.id}>{item.todo}</div>
      ))}
    </div>
  );
};

export default List;
