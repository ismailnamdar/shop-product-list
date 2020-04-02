import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import requestFactory from "./requestFactory";
import rootReducer from "./reducers";
import errorHandler from "./middlewares/errorHandler";
import { ACTIONS } from "./actions";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, errorHandler)
);

sagaMiddleware.run(requestFactory);

export const getSampleProduct = () => {
  console.log("sample product");
  store.dispatch({
    type: ACTIONS.HTTP_REQUEST,
    payload: { path: "sample_products.json", type: "GET_SAMPLE_PRODUCTS" },
  });
};

export default store;
