import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Select from "../views/Select";
import { SORT_KEYS } from "../configs/constants";

const SortSelector = ({ margin, onChange }) => {
  const { t } = useTranslation("translations");
  const sortKey = useSelector((state) => state.sampleProduct.sortKey);
  const handleSortChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );
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
  onChange: PropTypes.func,
};

SortSelector.defaultProps = {
  margin: "0px",
  onChange: () => {},
};

export default SortSelector;
