import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png"
import Insta from "../../img/insta.svg"
import Telegram from "../../img/telegram.svg"
import Facebook from "../../img/facebook.svg"
import Youtube from "../../img/youtube.svg"
import Twiter from "../../img/twitter.svg"
import Call from "../../img/call.svg"
import Sms from "../../img/Sms.svg"


function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-logo__wrapper">
          <img src={Logo} alt="" />
        </div>
        <p className="footer-text">
          We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim
          ad minim veniam, quis nostrud equip ex ea commodo consequat... <Link>Read
          More</Link>
        </p>
        <div className="footer-icon__wrapper">
            <Link><img src={Insta} alt="" /></Link>
            <Link><img src={Telegram} alt="" /></Link>
            <Link><img src={Facebook} alt="" /></Link>
            <Link><img src={Youtube} alt="" /></Link>
            <Link><img src={Twiter} alt="" /></Link>
        </div>
        <div className="footer-link__wrapper">
            <Link>Home</Link>
            <Link>News</Link>
            <Link>Media</Link>
            <Link>Store</Link>
            <Link>Structure</Link>
            <Link>Team</Link>
            <Link>Club</Link>
            <Link>Fan</Link>
            <Link>Academy</Link>
            <Link>Sponsors</Link>
        </div>
        <div className="last-wrapper">
            <div className="footer-address__wrapper">
                <div className="tel-address__wrapper-img">
                    <img src={Call} alt="" />
                    <div className="tel-address__wrapper">
                        <h5>Have a question?</h5>
                        <Link>+998 97 234 34 07</Link>
                    </div>
                </div>
                <div className="sms-address__wrapper-img">
                    <img src={Sms} alt="" />
                    <div className="sms-address__wrapper">
                        <h5>Have a question?</h5>
                        <Link>fc.andijon.com</Link>
                    </div>
                </div>
            </div>
            <Link className="last-link">© 2000-2021, All Rights Reserved</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;