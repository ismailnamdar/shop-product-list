import { getFailAction, getSuccessAction } from "../actions";
import { SORT_FUNCTIONS, SORT_KEYS } from "../../configs/constants";

const initialState = {
  data: [],
  processedData: [],
  filters: {
    inStock: false,
  },
  sortKey: SORT_KEYS.PRICE_ASC,
  count: 0,
};

export default function sampleProduct(state = initialState, action) {
  if (action.type === getSuccessAction("GET_SAMPLE_PRODUCTS")) {
    const processedData = [...action.payload.data];
    processedData.sort(SORT_FUNCTIONS[state.sortKey]);
    return {
      ...state,
      data: action.payload.data,
      processedData,
      count: action.payload.data.length,
    };
  }
  if (action.type === getFailAction("GET_SAMPLE_PRODUCTS")) {
    return state;
  }
  if (action.type === "setFilters") {
    if (action.payload == null) {
      return state;
    }
    const filters = {
      ...state.filters,
      ...action.payload,
    };
    const processedData = state.data.filter((datum) => {
      return Object.entries(filters).reduce((acc, [key, value]) => {
        if (acc === false) {
          return acc;
        }
        if (value === false) {
          return acc;
        }
        if (datum[key] !== value) {
          acc = false;
        }
        return acc;
      }, true);
    });
    processedData.sort(SORT_FUNCTIONS[state.sortKey]);
    return {
      ...state,
      processedData,
      filters,
    };
  }
  if (action.type === "setSortKey") {
    if (action.payload == null) {
      return state;
    }
    const sortKey = action.payload;
    const processedData = [...state.processedData];
    processedData.sort(SORT_FUNCTIONS[sortKey]);
    return {
      ...state,
      processedData,
      sortKey,
    };
  }
  // add handlers here
  return state;
}
