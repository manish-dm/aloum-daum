import React, {useState} from "react";
import "./CheckoutModal.css";
import { Dialog } from "@mui/material";
import Gicon from "../../assets/icons/Gicon.png";
import Ficon from "../../assets/icons/Ficon.png";
import loginvector from "../../assets/images/cartpage/loginvector.jpg";
import registervector from "../../assets/images/cartpage/registervector.jpg";
import SignInModal from "../sign-inModal/SigInModal";

const CheckoutModal = ({ openDialog, setOpenDialog }) => {
  const [openSignIn, setOpenSignIn] = useState(false);

  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      maxWidth="lg"
    >
      <div className="checkoutmodal-wrapper">
        <div className="checkoutmodal-signin">
          <div className="checkoutmodal-image-div">
            <img src={loginvector} alt="vector art" />
          </div>
          <div className="checkoutmodal-message">Have an Account?</div>
          <button className="checkoutmodal-primary-button">Sign In</button>
          <SignInModal openSignIn={openSignIn} setOpenSignIn={setOpenSignIn}/>

          <div className="checkoutModal-divider">
            <div className="checkoutModal-left-div"></div>
            <div className="checkoutModal-or">or</div>
            <div className="checkoutModal-right-div"></div>
          </div>
          <div className="checkoutModal-other-Options">
            <div className="checkout-google-logo-conatiner">
              <img src={Gicon} alt="Google logo" />
              <div className="checkoutModal-vai-google">Google</div>
            </div>
            <div className="checkout-facebook-logo-conatiner">
              <img src={Ficon} alt="Facebook logo" />
              <div className="checkoutModal-vai-facebook">Facebook</div>
            </div>
          </div>
        </div>

        {/* ****************************** */}
        <div className="checkoutmodal-register">
          <div className="checkoutmodal-image-div">
            <img src={registervector} alt="vector art" />
          </div>
          <div className="checkoutmodal-message">Don't have a Account?</div>
          <button className="checkoutmodal-primary-button">Register</button>

          <div className="checkoutModal-divider">
            <div className="checkoutModal-left-div"></div>
            <div className="checkoutModal-or">or</div>
            <div className="checkoutModal-right-div"></div>
          </div>
          <div className="checkoutModal-other-Options">
            <div className="checkout-google-logo-conatiner">
              <img src={Gicon} alt="Google logo" />
              <div className="checkoutModal-vai-google">Google</div>
            </div>
            <div className="checkout-facebook-logo-conatiner">
              <img src={Ficon} alt="Facebook logo" />
              <div className="checkoutModal-vai-facebook">Facebook</div>
            </div>
          </div>
        </div>
        {/* *********************************** */}
        <div className="checkoutmodal-guest">
          <div className="checkoutmodal-image-div">
            <img src={registervector} alt="vector art" />
          </div>
          <div className="checkoutmodal-message">Checkout as Guest</div>
          <button className="checkoutmodal-primary-button">
            Continue as a guest
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default CheckoutModal;
