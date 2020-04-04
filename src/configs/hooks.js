import { useEffect } from "react";
import { sampleProduct } from "../redux/store";

export const useFetchSampleProducts = (condition = true) => {
  useEffect(() => {
    if (condition) {
      sampleProduct.getSampleProducts();
    }
  }, [condition]);
};
