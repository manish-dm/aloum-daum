import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const index = () => {
  return (
   <> 
    <Routes>
      <Route path="/" exact element={<Home />} />
     </Routes>
     </>
  );
};

export default index;