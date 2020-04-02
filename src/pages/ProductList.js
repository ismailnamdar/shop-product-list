import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import NavBar from "../views/NavBar";
import Input from "../components/Input";
import { sampleProduct } from "../redux/store";
import ProductCard from "../components/ProductCard";
import { SORT_KEYS } from "../configs/constants";

const SortSelector = () => {
  const { t } = useTranslation("translations");
  const sortKey = useSelector((state) => state.sampleProduct.sortKey);
  const handleSortChange = useCallback((event) => {
    sampleProduct.setSortKey(event.target.value);
  }, []);
  return (
    <select defaultValue={sortKey} onChange={handleSortChange}>
      <option key={SORT_KEYS.PRICE_DESC} value={SORT_KEYS.PRICE_DESC}>
        {t("descendingPrice")}
      </option>
      <option key={SORT_KEYS.PRICE_ASC} value={SORT_KEYS.PRICE_ASC}>
        {t("ascendingPrice")}
      </option>
    </select>
  );
};

const Filters = () => {
  const { t } = useTranslation("translations");
  const filters = useSelector((state) => state.sampleProduct.filters);
  const handleFilterChange = useCallback((event) => {
    sampleProduct.setFilters({ inStock: event.target.checked });
  }, []);
  return (
    <div>
      <input
        type="checkbox"
        checked={filters.inStock}
        onChange={handleFilterChange}
      />
      <span>{t("inStock")}</span>
    </div>
  );
};

const ProductList = () => {
  const [searchValue, setSearchValue] = useState();
  const products = useSelector((state) => state.sampleProduct.processedData);
  useEffect(() => {
    sampleProduct.getSampleProducts();
  }, []);
  return (
    <div>
      <NavBar>
        <Input value={searchValue} onChange={setSearchValue} />
      </NavBar>
      <NavBar>
        <Filters />
        <SortSelector onChange={console.log} />
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
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
