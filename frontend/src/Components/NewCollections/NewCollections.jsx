import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import new_collection from '../Assests/newcollections';
import Item from '../Item/Item';
import { Link } from 'react-router-dom'; // ✅ Add this

const NewCollections = () => {

const[new_collection,setNew_collection]=useState([]);
useEffect(()=>{
fetch('http://localhost:4000/newcollections').then((response)=>response.json())
.then((data)=>setNew_collection(data));
},[])

  return (
    <div className='NewCollections'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="item-link">
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
}

export default NewCollections;
