import React from "react";
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

export default ProductImage;
