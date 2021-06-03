import React from "react";
import video from "../../assets/videos/geforce-now-overview-hero-banner-xl.mp4";
import SearchInput from "./search-input";

const SearchBanner = () => {
  return (
    <div className="search-banner">
      <video className="search-banner__video" src={video} autoPlay loop>
        <source data-src={video} type="video/mp4" src={video} />
      </video>
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
