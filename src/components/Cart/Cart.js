import React, { useContext } from "react";
import "./Cart.scss";

import cartImg from "../../images/image-product-1-thumbnail.jpg";
import trash from "../../images/icon-delete.svg";
import { AppContext } from "../../Contexts/AppContext";

const Cart = () => {
  const { quantity, setQuantity } = useContext(AppContext);
  let price = 125.0;
  let total = (price * quantity).toFixed(2);
  return (
    <div className="cart_container">
      <h2>Cart</h2>
      <hr />

      {quantity === 0 ? (
        <div className="empty_cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="cart_description">
            <img src={cartImg} alt="" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                ${price} x {quantity} <span> ${total}</span>
              </p>
            </div>
            <img
              src={trash}
              alt=""
              className="trash"
              onClick={() => setQuantity(0)}
            />
          </div>
          <button className="checkout_btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
