import React from "react";
import CartBanner from "./sections/cartBanner/CartBanner";
import CartItems from "./sections/cartItems/CartItems";

const Cart = () => {
  return (
    <div>
      <CartBanner />
      <CartItems />
    </div>
  );
};

export default Cart;
