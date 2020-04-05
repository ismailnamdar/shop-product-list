import { createStore, applyMiddleware, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import requestFactory from "./requestFactory";
import errorHandler from "./middlewares/errorHandler";
import reducerConfigs from "./reducers";

const reducers = reducerConfigs.reduce((acc, item) => {
  acc[item.name] = item.reducer;
  return acc;
}, {});

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, errorHandler)
);

sagaMiddleware.run(requestFactory);

export const handlers = reducerConfigs.reduce((acc, item) => {
  acc[item.name] = item.handlers(store.dispatch);
  return acc;
}, {});

export default store;
