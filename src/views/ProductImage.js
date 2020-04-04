import React from "react";
import PropTypes from "prop-types";
import "./ProductImage.sass";
import { useTranslation } from "react-i18next";

const ProductImage = ({ src, alt, isNew, inStock, style }) => {
  const { t } = useTranslation("translations");
  return (
    <>
      <img
        className="ProductImage"
        src={src}
        alt={alt}
        height={200}
        width="100%"
        style={style}
      />
      {isNew && (
        <div className={"ProductImage__isNew"}>
          New
        </div>
      )}
      {!inStock && (
        <div className={"ProductImage__inStock"}>
          {t("soldOut")}
        </div>
      )}
    </>
  );
};

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
  inStock: PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ProductImage.defaultProps = {
  isNew: false,
  inStock: true,
  style: {},
};

export default ProductImage;
