import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import ProductImage from "./ProductImage";
import "./ProductCard.sass";

export const ProductBrand = ({ text, size, color }) => {
  return (
    <span className="ProductCard__brand" style={{ fontSize: size, color }}>
      {text}
    </span>
  );
};

ProductBrand.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

ProductBrand.defaultProps = {
  size: null,
  color: null,
};

export const ProductName = ({ text, size }) => {
  return (
    <span className="ProductCard__name" style={{ fontSize: size }}>
      {text}
    </span>
  );
};

ProductName.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
};

ProductName.defaultProps = {
  size: null,
};

export const ProductPrice = ({ price, oldPrice, basePrice }) => {
  return (
    <>
      <div>
        <span className="ProductCard__price">{price}</span>
        {oldPrice && (
          <span className="ProductCard__oldPrice margin-left">{oldPrice}</span>
        )}
      </div>
      <div>
        {basePrice && (
          <span className="ProductCard__basePrice">{basePrice}</span>
        )}
      </div>
    </>
  );
};

ProductPrice.propTypes = {
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string,
  basePrice: PropTypes.string,
};

ProductPrice.defaultProps = {
  oldPrice: null,
  basePrice: null,
};

const ProductCard = React.memo(({ product }) => {
  const history = useHistory();
  const handleNavigateProductDetail = useCallback(() => {
    history.push(`product/${product.productId}`);
  }, [history, product]);
  return (
    <div
      className="ProductCard"
      role="button"
      tabIndex={0}
      onClick={handleNavigateProductDetail}
      onKeyPress={handleNavigateProductDetail}
    >
      <ProductImage
        src={product.image}
        alt={product.name}
        isNew={product.params.isNew === "true"}
        inStock={product.inStock}
      />
      <div className="ProductCard__metaContainer">
        <ProductBrand text={product.brand} />
        <ProductName text={product.name} />
      </div>
      <div className="ProductCard__priceContainer">
        <ProductPrice
          price={product.priceText}
          oldPrice={product.oldPriceText}
        />
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    priceText: PropTypes.string.isRequired,
    oldPriceText: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      isNew: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductCard;
