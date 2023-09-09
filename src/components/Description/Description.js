import React, { useState, useContext } from "react";
import "./Description.scss";

import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart.svg";

import { AppContext } from "../../Contexts/AppContext";

const Description = () => {
  const { quantity, setQuantity } = useContext(AppContext);

  const add = () => {
    setQuantity(quantity + 1);
  };

  const subtract = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else setQuantity(quantity - 1);
  };

  return (
    <div className="description_container">
      <div className="text">
        <h5>sneakers company</h5>
        <h1>Fall Limited Eddition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear
          companion.Featuring a durable rubber outer sole , they'll withstand
          everything the weather can offer.
        </p>
      </div>

      <div className="price">
        <h2>$125.00</h2>
        <span>50%</span>
        <p>$250.00</p>
      </div>

      <div className="buttons">
        <div className="quantity">
          <img src={minus} alt="" onClick={subtract} className="pointer" />
          <p>{quantity}</p>
          <img src={plus} alt="" onClick={add} className="pointer" />
        </div>

        <button className="add_to_cart">
          <img src={cart} alt="" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Description;
