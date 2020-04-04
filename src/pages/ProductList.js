import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Bar from "../views/Bar";
import Input from "../views/Input";
import { sampleProduct } from "../redux/store";
import ProductCard from "../components/ProductCard";
import { SORT_KEYS } from "../configs/constants";
import Select from "../views/Select";
import Content from "../views/Content";
import { useFetchSampleProducts } from "../configs/hooks";
import NavBar from "../views/NavBar";

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

SortSelector.propTypes = {
  margin: PropTypes.string,
};

SortSelector.defaultProps = {
  margin: "0px",
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

Filters.propTypes = {
  margin: PropTypes.string,
};

Filters.defaultProps = {
  margin: "0px",
};

const ProductList = () => {
  const { t } = useTranslation("translations");
  const products = useSelector((state) => state.sampleProduct.processedData);
  const { searchValue, searchedProducts } = useSelector((state) => ({
    searchValue: state.sampleProduct.searchValue,
    searchedProducts: state.sampleProduct.searchedData,
  }));
  useFetchSampleProducts();
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
        <Filters margin="0 0 0 8px" />
        <SortSelector margin="0 8px 0 0" />
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
