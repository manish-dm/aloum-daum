import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../components/productDetails/ProductDetails";
import Home from "../pages/home/Home";
import Payment from "../pages/payment/Payment";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";

const index = () => {
  return (
   <> 
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/payment" exact element={<Payment />} />
      <Route path="/shop" exact element={<Shop />} />
      <Route path = '/product-detail' exact element = {<ProductDetails />} />
      <Route path="/cart" exact element={<Cart />} />
     </Routes>
     </>
  );
};

export default index;