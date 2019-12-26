import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middllewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middllewares));

export default store;
