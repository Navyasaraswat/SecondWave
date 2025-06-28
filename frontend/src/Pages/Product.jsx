import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrumb from "../Components/Breadcrum/Breadcrum";
import './css/Product.css';
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const numericProductId = Number(productId);
  const product = all_products?.find((e) => e.id === numericProductId);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="back-link">← Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-page">
      <Breadcrumb product={product} />
      <ProductDisplay product={product}/>
      <RelatedProducts/>
      </div>
   
  );
};

export default Product;
