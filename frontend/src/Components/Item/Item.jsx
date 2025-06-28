import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <Link to={`/product/${id}`} className="item-link">
      <div className="Item">
        <img src={image} alt={name} className="item-image" />
        <p className="item-name">{name}</p>
        <div className="item-prices">
          <div className="item-prices-new">${new_price}</div>
          <div className="item-prices-old">${old_price}</div>
        </div>
      </div>
    </Link>
  );
};

// PropTypes validation
Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};

export default Item;
