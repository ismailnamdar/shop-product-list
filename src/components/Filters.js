import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Filters = ({ margin, onChange }) => {
  const { t } = useTranslation("translations");
  const filters = useSelector((state) => state.sampleProduct.filters);
  const handleFilterChange = useCallback(
    (event) => {
      onChange({ inStock: event.target.checked });
    },
    [onChange]
  );
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
  onChange: PropTypes.func,
};

Filters.defaultProps = {
  margin: "0px",
  onChange: () => {},
};

export default Filters;
