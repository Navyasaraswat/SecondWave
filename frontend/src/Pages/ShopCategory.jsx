import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { Link } from 'react-router-dom'; // ✅ Import Link

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='ShopCategory'>
      <img src={props.banner} alt="Category Banner" />

      <div className="ShopCategory-indexsort">
        <p>
          <span>Showing 1-12</span> of {all_products.filter(item => item.category === props.category).length}
        </p>
        <div className="ShopCategory-sort">
          Sort by
        </div>
      </div>

      <div className="ShopCategory-products">
        {all_products
          .filter(item => item.category === props.category)
          .map(item => (
            <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
