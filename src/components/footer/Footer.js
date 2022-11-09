import React from 'react'
import './footer.css'
import aloumFooterLogo from "../../assets/images/homepage/aloumfooterLogo.png"
import facebook from '../../assets/icons/facebook.png'
import youtube from '../../assets/icons/youtube.png'
import instagram from '../../assets/icons/instagram.png'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer-main'>
            <div className='footer-content'>
                <div className='footer-row-1'>
                    <div className='aloum-desc'>
                        <img className='aloum-footer-logo' src={aloumFooterLogo} />
                        <div className='company-desc'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor Lorem ipsum.
                        </div>
                    </div>

                    <div className='footer-nav-links'>
                        <p className='footer-heads'>Shops</p>
                        <p className='links'>Hair</p>
                        <p className='links'>Face</p>
                        <p className='links'>Body</p>
                        <p className='links'>Wellness</p>
                        <p className='links'>Intimate</p>
                    </div>
                    <div className='footer-infos'>
                        <p className='footer-heads'>Informations</p>
                        <p className='infos'>Start a Return</p>
                        <p className='infos'>Contact Us</p>
                        <p className='infos'>Shipping FAQ</p>
                        <p className='infos'>Terms & Conditions</p>
                        <p className='infos'>Privacy Policy</p>
                    </div>
                    <div className='footer-contactUs'>
                        <p className='footer-heads'>Contact Us</p>
                        <p className='email-field'>Email</p>
                        <p className='email'>aloumdaum123@gmail.com</p>
                        <p className='contact-number-field'>Contact</p>
                        <p className='contact-number'>6243532653</p>
                        <div className='follow-us-div'>
                            <div className='follow-us-text'>Follows Us:- </div>
                            <img className='icons instagram-logo' src={instagram} />
                            <img className='icons facebook-logo' src={facebook} />
                            <img className='icons youtube-logo' src={youtube} />
                        </div>
                    </div>
                </div>
                <div className='footer-row-2'>
                   <div className='copyright'><span style = {{color: "#707070"}}>&copy; </span>AloumDaum {year}.</div>
                   <div className='payment-gateways'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer