import lunr from "lunr";
import { getFailAction, getSuccessAction } from "../actions";
import { SORT_FUNCTIONS, SORT_KEYS } from "../../configs/constants";

const initialState = {
  data: [],
  dataMapByProductId: {},
  indexedData: [],
  processedData: [],
  filters: {
    inStock: false,
  },
  searchValue: "",
  searchedData: null,
  sortKey: SORT_KEYS.PRICE_DESC,
  count: 0,
};

export default function sampleProduct(state = initialState, action) {
  if (action.type === getSuccessAction("GET_SAMPLE_PRODUCTS")) {
    const dataMapByProductId = action.payload.data.reduce((acc, datum) => {
      acc[datum.productId] = datum;
      return acc;
    }, {});
    const processedData = [...action.payload.data];
    processedData.sort(SORT_FUNCTIONS[state.sortKey]);
    // eslint-disable-next-line func-names
    const indexedData = lunr(function () {
      this.ref("productId");
      this.field("brand");
      this.field("name");
      // eslint-disable-next-line func-names
      action.payload.data.forEach(function (doc) {
        this.add(doc);
      }, this);
    });
    return {
      ...state,
      data: action.payload.data,
      dataMapByProductId,
      indexedData,
      processedData,
      count: action.payload.data.length,
    };
  }
  if (action.type === getFailAction("GET_SAMPLE_PRODUCTS")) {
    // init fail request here
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
          acc = false; // eslint-disable-line no-param-reassign
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
  if (action.type === "search") {
    if (typeof action.payload !== "string" || action.payload.length === 0) {
      return {
        ...state,
        searchValue: "",
        searchedData: null,
      };
    }
    const searchedData = state.indexedData
      .search(`*${action.payload.trim()}* ${action.payload.trim()}`)
      .map((item) => state.dataMapByProductId[item.ref]);
    return {
      ...state,
      searchedData,
      searchValue: action.payload,
    };
  }
  // add handlers here
  return state;
}
