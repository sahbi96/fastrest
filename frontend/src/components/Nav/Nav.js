import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../actions/user";

import "./nav.css";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const closeDropdownHandler = () => {
    setDropdown(false);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="nav-bar">
        <Link style={{color:'green',fontFamily:'cursive'}} className="nav-brand" to="/">
          FASTREST
        </Link>
        <hr/>
        <Link  className="nav-cart" to="/cart">
        <i class="fas fa-shopping-cart"> Cart</i> 
        
        </Link>
       
        {userInfo && (
          <Link className="nav-my-order" to="/myorder">
            <i class="fas fa-file-alt"> My Order</i>
          </Link>
        )}

        {userInfo && userInfo.isAdmin && (
          
          <div className="nav-admin">
            
            <Link
              className="nav-product-list"
              to="/admin/productlist"
              onClick={closeDropdownHandler}
            >
              <i class="fas fa-utensils"> Product list</i>
                          
            </Link>
            <Link className="nav-order-list" to="/admin/orderlist">
            <i class="fas fa-list-alt"> Order list</i>
            </Link>
          </div>
        )}

        {userInfo && (
          <div className="nav-greeting">Welcome, {userInfo.name}</div>
        )}
        {userInfo ? (
          <div className="nav-logout" onClick={logoutHandler}>
            <i className="fa fa-sign-out icon"></i>
            Logout
          </div>
        ) : (
          <Link className="nav-login" to="/login">
            <i className="fa fa-sign-in icon"></i>
            Login
          </Link>
        )}
        <i
          className={
            dropdown
              ? "fa fa-times fa-2x nav-dropdown-icon"
              : "fa fa-bars fa-2x nav-dropdown-icon"
          }
          onClick={dropdownHandler}
        ></i>
        {dropdown && (
          <div className="nav-dropdown">
            <div className="nav-dropdown-content">
              <Link
                className="nav-dropdown-cart"
                to="/cart"
                onClick={closeDropdownHandler}
              >
                <i className="fa fa-shopping-cart dropdown-cart-icon"></i>
                Cart
              </Link>
              <Link
                className="nav-dropdown-my-order"
                to="/myorder"
                onClick={closeDropdownHandler}
              >
                <i className="fa fa-file-text dropdown-icon"> My Order</i>
                
              </Link>
              {userInfo && userInfo.isAdmin && (
                <Link
                  className="nav-dropdown-product-list"
                  to="/admin/productlist"
                  onClick={closeDropdownHandler}
                >
                  <i className="fa fa-cubes icon"> Product list</i>
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <Link
                  className="nav-dropdown-order-list"
                  to="/admin/orderlist"
                  onClick={closeDropdownHandler}
                >
                  <i className="fa fa-list-ul dropdown-icon"></i>
                  Order list
                </Link>
              )}
              {userInfo ? (
                <div className="nav-dropdown-logout" onClick={logoutHandler}>
                  <i className="fa fa-sign-out dropdown-icon"></i>
                  Logout
                </div>
              ) : (
                <Link
                  className="nav-dropdown-login"
                  to="/login"
                  onClick={closeDropdownHandler}
                >
                  <i className="fa fa-sign-in dropdown-icon"></i>
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
