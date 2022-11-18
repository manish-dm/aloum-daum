import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Gicon from '../../assets/icons/Gicon.png'
import Ficon from '../../assets/icons/Ficon.png'
import { AiFillCloseCircle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './signInModal.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 300, // theme.breakpoints.up('xs')
    sm: 300, // theme.breakpoints.up('sm')
    md: 400, // theme.breakpoints.up('md')
    lg: 450, // theme.breakpoints.up('lg')
    xl: 450, // theme.breakpoints.up('xl')
  },
  height: {
    xs: 400, // theme.breakpoints.up('xs')
    sm: 400, // theme.breakpoints.up('sm')
    md: 450, // theme.breakpoints.up('md')
    lg: 500, // theme.breakpoints.up('lg')
    xl: 507, // theme.breakpoints.up('xl')
  },
  bgcolor: '#FDF9F8',
  boxShadow: 24,
  p: 4,
};

export default function SignInModal({ openSignIn, setOpenSignIn }) {
  const [emailShown, setEmailShown] = useState(false);
  return (
    <div>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div className='close-sigIn-modal'>
            <AiFillCloseCircle onClick={() => setOpenSignIn(false)} size={37} />
          </div>
          <div className='SignInModal-main'>
            <div className='SignInModal-title'>
              Have an account?
            </div>
            <div className='SignInModal-heading'>
              Sign in
            </div>
            <div className='SignInModal-main-secured-input'>
              <input

                type={emailShown ? "text" : "password"}

                placeholder="Enter email Id or mobile no."

              />
              <br />
              <AiFillEye className="SignInModal-main-visibility-on" />
              {emailShown ? (<AiFillEyeInvisible
                className="SignInModal-main-visibility-on"
                onClick={() => setEmailShown(!emailShown)}
              />
              ) : (<AiFillEye
                className="SignInModal-main-visibility-on"
                onClick={() => setEmailShown(!emailShown)}
              />)}
            </div>
            <button className='SignInModal-otp-btn'>Send OTP</button>
            <div className='SignInModal-divider'>
              <div className="SigInModal-left-div"></div>
              <div className='SignInModal-or'>or</div>
              <div className="SigInModal-right-div"></div>
            </div>
            <div className='SignInModal-other-Options'>
              <div className='google-logo-conatiner'>
                <img src={Gicon} alt="Google logo" />
                <div className='signin-vai-google'>Google</div>
              </div>
              <div className='facebook-logo-conatiner'>
                <img src={Ficon} alt="Facebook logo" />
                <div className='signin-vai-facebook'>Facebook</div>
              </div>

            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
