import React from "react";
import "./CheckoutModal.css";
import { Dialog } from "@mui/material";

const CheckoutModal = ({ openDialog, setOpenDialog }) => {
  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <div className="checkoutmodal-wrapper">
        <div className="checkoutmodal-signin">signin</div>
        <div className="checkoutmodal-register">register</div>
        <div className="checkoutmodal-guest">guest</div>
      </div>
    </Dialog>
  );
};

export default CheckoutModal;
