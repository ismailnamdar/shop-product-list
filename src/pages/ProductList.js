import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Bar from "../views/Bar";
import Input from "../views/Input";
import { sampleProduct } from "../redux/store";
import ProductCard from "../components/ProductCard";
import Content from "../views/Content";
import { useFetchSampleProducts } from "../configs/hooks";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import SortSelector from "../components/SortSelector";

const setLocation = (history, key, value) => {
  const params = new window.URLSearchParams(window.location.search);
  params.set(key, value);
  history.push({ search: params.toString() });
};

const ProductList = () => {
  const { t } = useTranslation("translations");
  const history = useHistory();
  const { products, searchValue, searchedProducts, loaded } = useSelector(
    (state) => ({
      products: state.sampleProduct.processedData,
      searchValue: state.sampleProduct.searchValue,
      searchedProducts: state.sampleProduct.searchedData,
      loaded: state.sampleProduct.loaded,
    })
  );
  useFetchSampleProducts();
  const handleSortChange = useCallback(
    (value) => {
      setLocation(history, "orderBy", value);
      sampleProduct.setSortKey(value);
    },
    [history]
  );
  const handleFilterChange = useCallback(
    (value) => {
      setLocation(history, "filterBy", JSON.stringify(value));
      sampleProduct.setFilters(value);
    },
    [history]
  );
  const handleSearchChange = useCallback(
    (value) => {
      setLocation(history, "search", value);
      sampleProduct.search(value);
    },
    [history]
  );

  useEffect(() => {
    if (loaded) {
      const params = new window.URLSearchParams(window.location.search);
      const search = params.get("search");
      const orderBy = params.get("orderBy");
      const filterBy = params.get("filterBy");
      if (search != null) {
        handleSearchChange(search);
      }
      if (orderBy != null) {
        handleSortChange(orderBy);
      }
      if (filterBy != null) {
        handleFilterChange(JSON.parse(filterBy));
      }
    }
  }, [loaded, handleSearchChange, handleSortChange, handleFilterChange]);

  return (
    <div>
      <NavBar>
        <Input
          width="40%"
          placeholder={t("searchProduct")}
          value={searchValue}
          onChange={handleSearchChange}
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
