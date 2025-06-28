import React from 'react';
import './Popular.css';
import data_product from '../Assests/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='Popular'>
        <h1>Popular in Women</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item) => {
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
            })}
        </div>
    </div>
  );
}

export default Popular;
