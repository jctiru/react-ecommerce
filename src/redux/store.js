import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middllewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middllewares));

export const persistor = persistStore(store);
