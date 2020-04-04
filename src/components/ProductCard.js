import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import ProductImage from "../views/ProductImage";
import "./ProductCard.sass";

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
      <ProductImage src={product.image} alt={product.name} />
      <div className="ProductCard__metaContainer">
        <span className="ProductCard__brand">{product.brand}</span>
        <span className="ProductCard__name">{product.name}</span>
      </div>
      <div className="ProductCard__metaContainer">
        <span className="ProductCard__price">{product.priceText}</span>
        <span className="ProductCard__oldPrice">{product.oldPriceText}</span>
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
  }).isRequired,
};

export default ProductCard;
