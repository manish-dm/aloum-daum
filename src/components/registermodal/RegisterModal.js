import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Gicon from "../../assets/icons/Gicon.png";
import Ficon from "../../assets/icons/Ficon.png";
import { AiFillCloseCircle } from "react-icons/ai";
import "./RegisterModal.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100vw", // theme.breakpoints.up('xs')
    sm: 400, // theme.breakpoints.up('sm')
    md: 440, // theme.breakpoints.up('md')
    lg: 500, // theme.breakpoints.up('lg')
    xl: 500, // theme.breakpoints.up('xl')
  },
  height: {
    xs: "100vh", // theme.breakpoints.up('xs')
    sm: 460, // theme.breakpoints.up('sm')
    md: 550, // theme.breakpoints.up('md')
    lg: 620, // theme.breakpoints.up('lg')
    xl: 690, // theme.breakpoints.up('xl')
  },
  bgcolor: "#FDF9F8",
  boxShadow: 24,
  // p: 4,
};

export default function RegisterModal({ openRegister, setOpenRegister }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div>
      <Modal
        open={openRegister}
        onClose={() => setOpenRegister(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="close-register-modal">
            <AiFillCloseCircle
              onClick={() => setOpenRegister(false)}
              size={37}
            />
          </div>
          <div className="register-modal-main">
            <div className="register-modal-title">Have an account?</div>
            <div className="register-modal-heading">Register</div>

            <div className="register-modal-allinputs-container">
              <input
                type="text"
                placeholder="Email Address"
                className="register-email-input"
              />
              <div className="register-name-input-div">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="register-password-input-div">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  className="register-pswrd-input"
                />
                {passwordShown ? (
                  <AiFillEyeInvisible
                    className="pswrd-eye-button-css"
                    onClick={() => setPasswordShown(!passwordShown)}
                  />
                ) : (
                  <AiFillEye
                    className="pswrd-eye-button-css"
                    onClick={() => setPasswordShown(!passwordShown)}
                  />
                )}
              </div>
              <div className="register-gender-select-div">
                <span>Select Gender:</span>
                <span>
                  <input
                    type="radio"
                    id="registerOptionFemale"
                    name="registerGender"
                  />
                  <label htmlFor="registerOptionFemale">Female</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="registerOptionMale"
                    name="registerGender"
                  />
                  <label htmlFor="registerOptionMale">Male</label>
                </span>
              </div>

              <div className="register-phoneNum-input-div">
                <input
                  type={showPhone ? "number" : "password"}
                  placeholder="Enter Mobile Number"
                  className="register-pswrd-input"
                />
                {showPhone ? (
                  <AiFillEyeInvisible
                    className="pswrd-eye-button-css"
                    onClick={() => setShowPhone(!showPhone)}
                  />
                ) : (
                  <AiFillEye
                    className="pswrd-eye-button-css"
                    onClick={() => setShowPhone(!showPhone)}
                  />
                )}
              </div>
              <div className="register-privacyterms-div">
                <input type="checkbox" />
                <span>
                  By clicking Create account, I agree that I have read and
                  accepted the Terms of Use and Privacy Policy.
                </span>
              </div>
            </div>

            <button className="registermodal-otp-btn">Send OTP</button>

            {/* ************ */}
            <div className="register-divider">
              <div className="register-left-div"></div>
              <div className="register-or">or</div>
              <div className="register-right-div"></div>
            </div>
            <div className="register-other-Options">
              <div className="register-google-logo-conatiner">
                <img src={Gicon} alt="Google logo" />
                <div className="register-signin-vai-google">Google</div>
              </div>
              <div className="register-facebook-logo-conatiner">
                <img src={Ficon} alt="Facebook logo" />
                <div className="register-signin-vai-facebook">Facebook</div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
