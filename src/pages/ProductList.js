import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../views/NavBar";
import Input from "../components/Input";
import { getSampleProduct } from "../redux/store";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [searchValue, setSearchValue] = useState();
  const products = useSelector((state) => state.sampleProduct.data);
  useEffect(() => {
    getSampleProduct();
  }, []);
  return (
    <div>
      <NavBar>
        <Input value={searchValue} onChange={setSearchValue} />
      </NavBar>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.productId} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
