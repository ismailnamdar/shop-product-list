import React from "react";
import PropTypes from "prop-types";
import "./ProductImage.sass";

const ProductImage = ({ src, alt }) => {
  return (
    <img
      className="ProductImage"
      src={src}
      alt={alt}
      height={200}
      width="100%"
    />
  );
};

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImage;
