import { useEffect } from "react";
import { handlers } from "../redux/store";

// eslint-disable-next-line import/prefer-default-export
export const useFetchSampleProducts = (condition = true) => {
  useEffect(() => {
    if (condition) {
      handlers.sampleProduct.getSampleProducts();
    }
  }, [condition]);
};
