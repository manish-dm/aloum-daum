import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Payment from "../pages/payment/Payment";
import Shop from "../pages/shop/Shop";

const index = () => {
  return (
   <> 
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/payment" exact element={<Payment />} />
      <Route path="/shop" exact element={<Shop />} />
     </Routes>
     </>
  );
};

export default index;