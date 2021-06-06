import React, { useRef } from "react";
import IconSearch from "../../svg-files/search-icon-svg";
import IconClose from "../../svg-files/clear-icon-svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchLetters,
  searchedGameTitles,
} from "../../store/games-reducer";

const SearchInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const updateSearchLetter = (event) => {
    dispatch(addSearchLetters(event.target.value));
  };
  const clearSearchLetter = () => {
    inputRef.current.value = "";
    dispatch(addSearchLetters(""));
  };
  const gameTitles = useSelector(searchedGameTitles);
  return (
    <div className="search-banner__wrapper">
      <div className="search-banner__searc-icon">
        <IconSearch />
      </div>
      <input
        className="search-banner__input"
        name="search"
        placeholder="Search Games"
        onChange={updateSearchLetter}
        ref={inputRef}
      />
      <div className="search-banner__clear-icon" onClick={clearSearchLetter}>
        <IconClose />
      </div>
      {gameTitles.length > 0 && (
        <div className="search-anner__result">
          {gameTitles.map((title, key) => {
            return (
              <p className="search-anner__result-text" key={key}>
                {title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
