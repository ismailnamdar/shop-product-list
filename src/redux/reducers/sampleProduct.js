import { getFailAction, getSuccessAction } from "../actions";

const initialState = {
  data: [],
  count: 0,
};

export default function sampleProduct(state = initialState, action) {
  if (action.type === getSuccessAction("GET_SAMPLE_PRODUCTS")) {
    return {
      ...state,
      data: action.payload.data,
      count: action.payload.data.length,
    };
  }
  if (action.type === getFailAction("GET_SAMPLE_PRODUCTS")) {
    return state;
  }
  // add handlers here
  return state;
}
