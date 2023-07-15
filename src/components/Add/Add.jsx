import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { todoContext } from "../../contexts/todoContext";

const Add = () => {
  const { createTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  function handleSave() {
    let newTodo = {
      todo,
    };
    createTodo(newTodo);
    console.log(newTodo);
  }
  return (
    <Box>
      <TextField
        label="Outlined"
        onChange={(e) => setTodo(e.target.value)}
        variant="outlined"
      />
      <Button onClick={() => handleSave()} variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default Add;
