export const API_BASE_URL = "http://proto.segmentify.com";

export const SORT_KEYS = {
  PRICE_ASC: "PRICE_ASC",
  PRICE_DESC: "PRICE_DESC",
};

export const SORT_FUNCTIONS = {
  [SORT_KEYS.PRICE_ASC]: (a, b) => a.price - b.price,
  [SORT_KEYS.PRICE_DESC]: (a, b) => b.price - a.price,
};
