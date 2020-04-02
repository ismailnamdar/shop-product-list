export const ACTIONS = {
  HTTP_REQUEST: "HTTP_REQUEST",
  HTTP_ERROR: "HTTP_ERROR",
};

const SUCCESS_SUFFIX = "_SUCCESS";
const FAIL_SUFFIX = "_SUCCESS";
export const getSuccessAction = (type) => `${type}${SUCCESS_SUFFIX}`;
export const getFailAction = (type) => `${type}${FAIL_SUFFIX}`;
