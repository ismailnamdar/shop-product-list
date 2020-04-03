import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import NavBar from "../views/NavBar";
import Input from "../views/Input";
import { sampleProduct } from "../redux/store";
import ProductCard from "../components/ProductCard";
import { SORT_KEYS } from "../configs/constants";
import Select from "../views/Select";
import Content from "../views/Content";

const SortSelector = ({ margin }) => {
  const { t } = useTranslation("translations");
  const sortKey = useSelector((state) => state.sampleProduct.sortKey);
  const handleSortChange = useCallback((event) => {
    sampleProduct.setSortKey(event.target.value);
  }, []);
  return (
    <Select defaultValue={sortKey} margin={margin} onChange={handleSortChange}>
      <option key={SORT_KEYS.PRICE_DESC} value={SORT_KEYS.PRICE_DESC}>
        {t("descendingPrice")}
      </option>
      <option key={SORT_KEYS.PRICE_ASC} value={SORT_KEYS.PRICE_ASC}>
        {t("ascendingPrice")}
      </option>
    </Select>
  );
};

const Filters = ({ margin }) => {
  const { t } = useTranslation("translations");
  const filters = useSelector((state) => state.sampleProduct.filters);
  const handleFilterChange = useCallback((event) => {
    sampleProduct.setFilters({ inStock: event.target.checked });
  }, []);
  return (
    <div style={{ margin }}>
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
  const { t } = useTranslation("translations");
  const [searchValue, setSearchValue] = useState();
  const products = useSelector((state) => state.sampleProduct.processedData);
  useEffect(() => {
    sampleProduct.getSampleProducts();
  }, []);
  return (
    <div>
      <NavBar>
        <Input
          width="40%"
          placeholder={t("searchProduct")}
          value={searchValue}
          onChange={setSearchValue}
        />
      </NavBar>
      <NavBar spaceBetween>
        <Filters margin="0 0 0 8px" />
        <SortSelector margin="0 8px 0 0" onChange={console.log} />
      </NavBar>
      <Content backgroundColor={"#f9f9f9"}>
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </Content>
    </div>
  );
};

export default ProductList;
