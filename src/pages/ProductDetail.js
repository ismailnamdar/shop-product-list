import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import NavBar from "../components/NavBar";
import { useFetchSampleProducts } from "../configs/hooks";
import ProductImage from "../components/ProductImage";
import {
  ProductBrand,
  ProductName,
  ProductPrice,
} from "../components/ProductCard";
import "./ProductDetail.sass";
import ProductMetaDataTable from "../components/ProductMetaDataTable";

const ProductDetail = () => {
  const { t } = useTranslation("translations");
  const history = useHistory();
  const { productId } = useParams();
  const { data, currentIndex, product, loaded } = useSelector((state) => ({
    data: state.sampleProduct.processedData,
    currentIndex: state.sampleProduct.processedData.findIndex(
      (datum) => datum.productId === productId
    ),
    product: state.sampleProduct.dataMapByProductId[productId],
    loaded: state.sampleProduct.loaded,
  }));
  useFetchSampleProducts(product == null);
  const navigateNextProduct = useCallback(() => {
    history.push(`/product/${data[currentIndex + 1].productId}`);
  }, [history, currentIndex, data]);
  const navigatePreviousProduct = useCallback(() => {
    history.push(`/product/${data[currentIndex - 1].productId}`);
  }, [history, currentIndex, data]);
  return (
    <div>
      <NavBar>
        {loaded && (
          <div className="center">
            <button
              type="button"
              className="button is-dark margin-right"
              disabled={currentIndex <= 0}
              onClick={navigatePreviousProduct}
            >
              <FaArrowLeft color="white" size="2em" />
            </button>
            <ProductBrand text={product.brand} color="white" size={16} />
            <button
              type="button"
              className="button is-dark margin-left"
              disabled={currentIndex >= data.length - 1}
              onClick={navigateNextProduct}
            >
              <FaArrowRight color="white" size="2em" />
            </button>
          </div>
        )}
      </NavBar>
      {loaded && (
        <div className="ProductDetail__container">
          <div className="center padding-medium">
            {product.category && product.category[0]}
          </div>
          <div>
            <div className="center flex-wrap">
              <div className="ProductDetail__imageContainer padding-medium">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  inStock={product.inStock}
                  style={{ width: "100%", height: 500 }}
                />
              </div>
              <div className="margin-left">
                <div className="padding-medium is-light">
                  <div>
                    <ProductBrand text={product.brand} size={16} />
                  </div>
                  <div className="margin-top-small">
                    <ProductName text={product.name} size={16} />
                  </div>
                  <div className="margin-top">
                    <ProductPrice
                      price={product.priceText}
                      oldPrice={product.oldPriceText}
                      basePrice={product.params.basePrice}
                    />
                  </div>
                </div>
                <div className="margin-top is-light">
                  <ProductMetaDataTable data={product.params} />
                </div>
                <div className="margin-top center">
                  <a
                    className="link is-success"
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contactUs")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
