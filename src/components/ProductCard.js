import React from "react";

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
const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: 300,
        width: 200,
        borderRadius: 2,
        padding: 8,
        margin: 2,
        marginTop: 8,
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.2), 1px 1px 1px 1px rgba(0, 0, 0, 0.19)",
      }}
    >
      <img src={product.image} alt={product.name} height={200} />
      {product.name}
      <span>{product.price}</span>
    </div>
  );
};

export default ProductCard;
