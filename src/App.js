import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter/Counter";
import React from "react";
import CounterContextProvider from "./contexts/counterContext";
import Add from "./components/Add/Add";
import TodoContextProvider from "./contexts/todoContext";
import List from "./components/List/List";
function App() {
  return (
    <TodoContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </TodoContextProvider>
  );
}

export default App;
