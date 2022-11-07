import React from "react";
import "./CheckoutModal.css";
import { Dialog } from "@mui/material";
import loginvector from "../../assets/images/cartpage/loginvector.jpg";
import registervector from "../../assets/images/cartpage/registervector.jpg";
import guestvector from "../../assets/images/cartpage/guestvector.jpg";

const CheckoutModal = ({ openDialog, setOpenDialog }) => {
  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="lg">
      <div className="checkoutmodal-wrapper">
        <div className="checkoutmodal-signin">
          <div className="checkoutmodal-image-div">
            <img src={loginvector} alt="vector art" />
          </div>
          <div className="checkoutmodal-message">Have an Account?</div>
          <button className="checkoutmodal-primary-button">Sign In</button>
          
        </div>

        <div className="checkoutmodal-register">register</div>
        <div className="checkoutmodal-guest">guest</div>
      </div>
    </Dialog>
  );
};

export default CheckoutModal;
