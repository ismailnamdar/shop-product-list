import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { useFetchSampleProducts } from "../configs/hooks";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector(
    (state) => state.sampleProduct.dataMapByProductId[productId]
  );
  useFetchSampleProducts(product == null);
  return (
    <div>
      <NavBar />
      {product != null && <ProductCard product={product} />}
    </div>
  );
};

export default ProductDetail;
