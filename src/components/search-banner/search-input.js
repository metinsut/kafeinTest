import React from "react";
import IconSearch from "../../svg-files/search-icon-svg";
import IconClose from "../../svg-files/clear-icon-svg";

const SearchInput = () => {
  return (
    <div className="search-banner__wrapper">
      <div className="search-banner__searc-icon">
        <IconSearch />
      </div>
      <input
        className="search-banner__input"
        name="search"
        placeholder="Search Games"
      />
      <div className="search-banner__clear-icon">
        <IconClose />
      </div>
      <div className="search-anner__result"></div>
    </div>
  );
};

export default SearchInput;
