import { type } from "@testing-library/user-event/dist/type";
import React, { createContext, useReducer } from "react";
export const counterContext = React.createContext();

const INIT_STATE = {
  counter: 0,
  counter2: 0,
};
//  action
// {
//     type: 'GET_DATA',
//     payload: someData
// }

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "DECREMENT":
      return { ...state, counter: action.payload };
    case "INCREMENT":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function decrement() {
    dispatch({
      type: "DECREMENT",
      payload: state.counter - 1,
    });
  }
  //   console.log(state);

  function increment() {
    dispatch({
      type: "INCREMENT",
      payload: state.counter + 1,
    });
  }

  return (
    <counterContext.Provider
      value={{ counter: state.counter, decrement, increment }}
    >
      {children}
    </counterContext.Provider>
  );
};
export default CounterContextProvider;
