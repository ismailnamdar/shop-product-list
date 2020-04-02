const errorHandler = (store) => (next) => (action) => {
  // TODO: init error handling here
  next(action);
};

export default errorHandler;
