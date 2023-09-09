import React, { useState, useContext } from "react";
import "./Header.scss";

import menuBtn from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import MobileList from "./MobileList";
import DesktopList from "./DesktopList";
import Cart from "../Cart/Cart";

import { AppContext } from "../../Contexts/AppContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { mobileList, setMobileList, quantity } = useContext(AppContext);

  const ToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="header_container">
      <div className="navbar">
        <div className="left_side">
          <img
            src={menuBtn}
            alt=""
            onClick={() => setMobileList(!mobileList)}
            className="menu_btn"
          />
          <img src={logo} alt="" className="logo" />
          <DesktopList />
        </div>

        <div className="right_side">
          <div className="cart_img_container">
            <img src={cart} alt="" className="cart" onClick={ToggleCart} />
            {quantity !== 0 && <span className="products">{quantity}</span>}
          </div>
          {showCart && <Cart />}
          <img src={avatar} alt="" className="avatar" />
        </div>
      </div>
      <MobileList />
    </div>
  );
};

export default Header;
