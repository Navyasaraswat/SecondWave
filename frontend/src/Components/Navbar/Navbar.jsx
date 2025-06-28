import React, { useContext } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import cart from "./carttt.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="The Second Wave Logo" />
        <p>The Second Wave</p>
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">Shop</Link>
          {isActive("/") && <hr />}
        </li>
        <li>
          <Link to="/Men" className="nav-link">Men</Link>
          {isActive("/Men") && <hr />}
        </li>
        <li>
          <Link to="/Women" className="nav-link">Women</Link>
          {isActive("/Women") && <hr />}
        </li>
        <li>
          <Link to="/Furnishings" className="nav-link">Furnishings</Link>
          {isActive("/Furnishings") && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button onClick={handleLogout} className="nav-login-btn">Logout</button>
        ) : (
          <Link to="/Login">
            <button className="nav-login-btn">Login</button>
          </Link>
        )}
        <Link to="/Cart" className="cart-wrapper" aria-label="Cart">
          <img src={cart} alt="Cart icon" className="cart-icon" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;