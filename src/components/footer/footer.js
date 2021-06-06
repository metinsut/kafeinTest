import React from "react";
import IconFacebook from "../../svg-files/facebook-icon-svg";
import IconTwitter from "../../svg-files/twitter-icon-svg";
import IconInstagram from "../../svg-files/instagram-icon-svg";
import IconYoutube from "../../svg-files/youtube-icon-svg";

const Footer = () => {
  const menuNames = [
    "Games",
    "Memmership",
    "Download",
    "Contact Us",
    "Blog",
    "FAQs",
    "Service Status",
  ];
  return (
    <footer>
      <div className="footer-body">
        <div className="footer-body__left-block">
          {menuNames.map((menu, key) => {
            return (
              <p className="footer-body__menu-text" key={key}>
                {menu}
              </p>
            );
          })}
        </div>
        <div className="footer-body__right-block">
          <div className="footer-body__social">
            <p className="footer-body__title">Follow Us!</p>
            <div className="footer-body__social-icons">
              <IconFacebook />
              <IconTwitter />
              <IconInstagram />
              <IconYoutube />
            </div>
          </div>
          <div className="footer-body__language">
            <p className="footer-body__title">Site Language</p>
            <select className="footer-body__select">
              <option>English</option>
              <option>Turkish</option>
            </select>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__left-block">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
        <div className="footer-bottom__right-block">Tüm Hakları Saklıdır.</div>
      </div>
    </footer>
  );
};

export default Footer;
