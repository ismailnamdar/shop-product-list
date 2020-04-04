import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const paramKeys = [
  { key: "land", title: "land" },
  { key: "region", title: "region" },
  { key: "art", title: "art" },
  { key: "tastes", title: "tastes" },
  { key: "rebsorte", title: "rebsorte" },
  { key: "weight", title: "weight" },
];
const ProductMetaDataTable = ({ data }) => {
  const { t } = useTranslation("translations");
  return (
    <table className="default-table">
      <tbody>
        {paramKeys.map((config) => (
          <tr key={config.key}>
            <td>{t(config.title)}</td>
            <td>
              {data[config.key] == null || data[config.key].length === 0
                ? "-"
                : data[config.key]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ProductMetaDataTable.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ProductMetaDataTable;
