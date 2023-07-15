import React, { useReducer } from "react";
import axios from "axios";

export const todoContext = React.createContext();

const INIT_STATE = {
  todos: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}
const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ! CRUD
  const API = "http://localhost:8000/todos";
  // ! Create
  async function createTodo(newTodo) {
    await axios.post(API, newTodo);
  }
  async function getTodos() {
    let res = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
    // console.log(res);
  }
  return (
    <todoContext.Provider value={{ todos: state.todos, createTodo, getTodos }}>
      {children}
    </todoContext.Provider>
  );
};
export default TodoContextProvider;
