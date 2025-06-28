import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { all_products } = useContext(ShopContext);

  const product = all_products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>

      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> ₹{product.new_price}</p>
          <p><del>₹{product.old_price}</del></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample description for the product.</p>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
