import React from "react";
import image1x from "../../assets/images/logo/logo.png";
import image2x from "../../assets/images/logo/logo@2x.png";
import image3x from "../../assets/images/logo/logo@3x.png";

const Header = () => {
  return (
    <header>
      <picture className="header__logo">
        <source srcSet={`${image2x} 2x`} />
        <source srcSet={`${image3x} 3x`} />
        <img src={image1x} alt="logo" />
      </picture>
      <div className="header__list">
        <a className="header__list header__list--active">Games</a>
        <a>Membership</a>
        <a>Download</a>
        <a>Blog</a>
        <a>Support</a>
      </div>
      <button className="header__button">LET'S PLAY</button>
    </header>
  );
};

export default Header;
