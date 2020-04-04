import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import NavBar from "../components/NavBar";
import { useFetchSampleProducts } from "../configs/hooks";
import ProductImage from "../views/ProductImage";
import {
  ProductBrand,
  ProductName,
  ProductPrice,
} from "../components/ProductCard";
import "./ProductDetail.sass";

/**
 *
 {
	"productId": "PKT-42061",
	"name": "Best of Vinexus 2017 Rotwein (6er-Paket)",
	"url": "https://www.vinexus.de/best-of-vinexus-2017-rotwein-6er-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-42061&_sgm_action=click",
	"image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-42061_2_.jpg",
	"imageS": "https://www.vinexus.de/media/image/1c/fc/8e/PKT-420615a507118ac631_200x200.jpg",
	"price": 49.3,
	"priceText": "€49,30",
	"oldPrice": 58.0,
	"oldPriceText": "€58,00",
	"category": ["Wein > Art > Pakete > Art > Aktionspakete", "Sale > Kategorien im Sale > Pakete", "Wein > Art > Pakete", "Wein > Art > Pakete > Art > Rotwein Pakete"],
	"categories": ["Wein", "Art", "Pakete", "Art", "Aktionspakete", "Sale", "Kategorien im Sale", "Rotwein Pakete"],
	"lastUpdateTime": 1518099000473,
	"inStock": false,
	"insertTime": 1514899645359,
	"publishTime": 1514899645359,
	"brand": "Unsere Selektion",
	"params": {
		"weight": "6 kg",
		"basePrice": "4.5 Liter (10,96 € * / 1 Liter)",
		"likeCount": "2",
		"manLogo": "https://www.vinexus.de/media/image/41/42/bd/unsere-selektion-logo.gif",
		"taxText": "inkl. MwSt. zzgl. Versandkosten",
		"stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
		"isNew": "",
		"land": "",
		"region": "",
		"art": "",
		"stars": "",
		"tastes": "",
		"isAb": "",
		"rebsorte": ""
	},
	"language": "DE",
	"currency": ""
 }
 */

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
    <table className={"default-table"}>
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
  return (
    <div>
      <NavBar>
        {loaded && (
          <div className="center">
            <button
              type="button"
              className="button is-dark margin-right"
              disabled={currentIndex <= 0}
              onClick={() =>
                history.push(`/product/${data[currentIndex - 1].productId}`)
              }
            >
              <FaArrowLeft color="white" size="2em" />
            </button>
            <ProductBrand text={product.brand} color="white" size={16} />
            <button
              type="button"
              className="button is-dark margin-left"
              disabled={currentIndex >= data.length - 1}
              onClick={() =>
                history.push(`/product/${data[currentIndex + 1].productId}`)}
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
            <div className="center">
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
