import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Bar from "../views/Bar";
import Input from "../views/Input";
import { sampleProduct } from "../redux/store";
import ProductCard from "../components/ProductCard";
import Content from "../views/Content";
import { useFetchSampleProducts } from "../configs/hooks";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import SortSelector from "../components/SortSelector";

const ProductList = () => {
  const { t } = useTranslation("translations");
  const products = useSelector((state) => state.sampleProduct.processedData);
  const { searchValue, searchedProducts } = useSelector((state) => ({
    searchValue: state.sampleProduct.searchValue,
    searchedProducts: state.sampleProduct.searchedData,
  }));
  useFetchSampleProducts();
  const handleSortChange = useCallback((value) => {
    sampleProduct.setSortKey(value);
  }, []);
  const handleFilterChange = useCallback((value) => {
    sampleProduct.setFilters(value);
  }, []);
  return (
    <div>
      <NavBar>
        <Input
          width="40%"
          placeholder={t("searchProduct")}
          value={searchValue}
          onChange={(value) => sampleProduct.search(value)}
        />
      </NavBar>
      <Bar backgroundColor="rgba(243,0,0,0.02)" justifyContent="space-between">
        <Filters margin="0 0 0 8px" onChange={handleFilterChange} />
        <SortSelector margin="0 8px 0 0" onChange={handleSortChange} />
      </Bar>
      <Content backgroundColor="rgba(243,0,0,0.02)">
        {(searchedProducts || products).map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </Content>
    </div>
  );
};

export default ProductList;
