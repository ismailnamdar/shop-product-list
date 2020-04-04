import { ACTIONS } from "../actions";

// eslint-disable-next-line no-unused-vars
const errorHandler = (store) => (next) => (action) => {
  if (action.type === ACTIONS.HTTP_ERROR) {
    // pop up info box here
    console.error("HTTP_REQUEST_FAIL: ", action.payload); // eslint-disable-line no-console
  }
  next(action);
};

export default errorHandler;
