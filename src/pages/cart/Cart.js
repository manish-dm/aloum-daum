import React from "react";
import SmallNewsletter from "../../components/smallNewsletter/SmallNewsletter";
import CartBanner from "./sections/cartBanner/CartBanner";
import CartItems from "./sections/cartItems/CartItems";

const Cart = () => {
  return (
    <div>
      <CartBanner />
      <CartItems />
      <SmallNewsletter />
    </div>
  );
};

export default Cart;
