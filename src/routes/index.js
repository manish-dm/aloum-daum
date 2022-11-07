import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Home from "../pages/home/Home";
import Payment from "../pages/payment/Payment";
import Shop from "../pages/shop/Shop";
import ShippingAddress from "../pages/shippingAddress/ShippingAddress";

const index = () => {
  return (
   <> 
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/payment" exact element={<Payment />} />
      <Route path="/shop" exact element={<Shop />} />
      <Route path = '/product-detail' exact element = {<ProductDetails />} />
      <Route path = '/shipping-address' exact element = {<ShippingAddress />} />
     </Routes>
     </>
  );
};

export default index;