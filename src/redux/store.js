import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middleWares = [logger];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, ...middleWares))
);

export default store;
