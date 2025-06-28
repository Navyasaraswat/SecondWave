import React, { useContext, useState } from 'react';
import './CartItems.css';
import remove_icon from './removeicon.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const shippingFee = 20; // Flat shipping fee

  const handleApplyCoupon = () => {
    // Simple example: FLAT50 = 50 off
    if (coupon === 'FLAT50') {
      setDiscount(50);
    } else {
      setDiscount(0);
      alert('Invalid or expired coupon');
    }
  };

  // Calculate total amount
  const subtotal = all_products.reduce((total, product) => {
    const quantity = cartItems[product.id] || 0;
    return total + product.new_price * quantity;
  }, 0);

  const grandTotal = subtotal + shippingFee - discount;

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img 
                  src={remove_icon} 
                  onClick={() => removeFromCart(e.id)} 
                  alt='remove' 
                  className="remove-icon" 
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Total Section */}
      <div className="cartitems-total">
        <div>
          <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
          <h3>Shipping: ${shippingFee.toFixed(2)}</h3>
          <h3>Discount: -${discount.toFixed(2)}</h3>
          <hr />
          <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
      </div>

      {/* Coupon and Checkout */}
      <div className="cartitems-checkout-box">
        <input 
          type="text" 
          placeholder="Enter Coupon Code" 
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className='coup'
        />
        <button className="apply-btn" onClick={handleApplyCoupon}>Apply Coupon</button>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
