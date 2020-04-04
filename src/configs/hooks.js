import { useEffect } from "react";
import { sampleProduct } from "../redux/store";

// eslint-disable-next-line import/prefer-default-export
export const useFetchSampleProducts = (condition = true) => {
  useEffect(() => {
    if (condition) {
      sampleProduct.getSampleProducts();
    }
  }, [condition]);
};
