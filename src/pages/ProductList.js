import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../views/NavBar";
import Input from "../components/Input";
import { getSampleProduct } from "../redux/store";

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
          <div
            key={product.productId}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: 300,
              width: 200,
              borderRadius: 2,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "lightgrey",
              padding: 8,
              margin: 2,
              marginTop: 8,
              boxShadow:
                "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <img src={product.image} alt={product.name} height={200} />
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
