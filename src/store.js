import { applyMiddleware, createStore } from "redux";
export const COUNTER = "COUNTER";

export const store = createStore(
  numberReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware())
);

export default function numberReducer(state = [], action) {
  switch (action.type) {
    case "INIT":
      return {
        number: action.payload
      };
    case "COUNTER":
      return {
        number: action.payload
      };
    default:
      return state;
  }
}

export const SET_NUM = (state) => {
  return {
    type: COUNTER,
    payload: state
  };
};
