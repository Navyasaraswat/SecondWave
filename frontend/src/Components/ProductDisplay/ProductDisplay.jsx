import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from './staricon.png';
import dullstar from './dullstar.png';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main' src={product.image} alt=''/>
            </div>
        </div>
        <div className='productdisplay-right'> 
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={dullstar} alt=''/>
                <p>122 reviews</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
            <div className="productdisplay-right-price-new">
            ${product.new_price}
            </div>
            </div>
            <div className="productdisplay-right-description">
                A thrift store is a type of retail store that specializes in selling unique pre-owned goods, which are often donated by individuals or organizations. The items are usually sold at a lower price than what one would find at a traditional retail store.
            </div>
            <div className="productdisplay-right-size">
                One size
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        <p className='productdisplay-right-category'><span>tags:</span>Modern ,Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay