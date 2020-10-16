import lunr from "lunr";
import { ACTIONS, getFailAction, getSuccessAction } from "../actions";
import { SORT_FUNCTIONS, SORT_KEYS } from "../../configs/constants";
import sampleProducts from "../../sample-product.json";

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
  loaded: false,
};

const handlers = (dispatch) => ({
  getSampleProducts: () => {
    dispatch({
      type: ACTIONS.HTTP_REQUEST,
      payload: { path: "sample_products.json", type: "GET_SAMPLE_PRODUCTS" },
    });
  },
  setFilters: (payload) => {
    dispatch({
      type: "setFilters",
      payload,
    });
  },
  setSortKey: (payload) => {
    dispatch({
      type: "setSortKey",
      payload,
    });
  },
  search: (payload) => {
    dispatch({
      type: "search",
      payload,
    });
  },
});

const reducer = (state = initialState, action) => {
  if (
    action.type === getSuccessAction("GET_SAMPLE_PRODUCTS") ||
    action.type === getFailAction("GET_SAMPLE_PRODUCTS")
  ) {
    // use mock data by mutating action payload data
    // eslint-disable-next-line no-param-reassign
    action.payload.data = sampleProducts;
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
      loaded: true,
    };
  }
  if (action.type === getFailAction("GET_SAMPLE_PRODUCTS")) {
    // init fail request here
    return {
      ...state,
      loaded: true,
    };
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
};

const sampleProduct = {
  name: "sampleProduct",
  reducer,
  handlers,
};

export default sampleProduct;
