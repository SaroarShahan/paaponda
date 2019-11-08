import { createStore } from "redux";

const store = initialState => {
  return createStore(rootReducers, initialState);
};

export default store;
