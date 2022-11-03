import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Payment from "../pages/payment/Payment";

const index = () => {
  return (
   <> 
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/payment" exact element={<Payment />} />
     </Routes>
     </>
  );
};

export default index;