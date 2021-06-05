import React from "react";
import searchBackGroundImage from "../../assets/images/search-bg/search-bg.png";
import SearchInput from "./search-input";

const SearchBanner = () => {
  return (
    <div className="search-banner">
      <img
        className="search-banner__image"
        src={searchBackGroundImage}
        alt="search-bg"
      />
      <div className="search-banner__body">
        <h1 className="search-banner__title">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="search-banner__description">
          With the Cloud Gaming, you can join, play, and share games online with
          anyone in the world. Play any game on any device!
        </p>
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchBanner;
