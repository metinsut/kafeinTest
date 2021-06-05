import React from "react";
import IconDown from "../../svg-files/down-icon-svg";
import { getGenresSelector, addFilterTypes } from "../../store/games-reducer";
import { useSelector, useDispatch } from "react-redux";

const GameFilterContainer = () => {
  const dispatch = useDispatch();
  const genres = useSelector(getGenresSelector);
  const addFilterToList = (event) => {
    const filterName = event.target.value;
    const filterStatus = event.target.checked;
    dispatch(addFilterTypes({ filterName, filterStatus }));
  };
  return (
    <div className="game-filter">
      <div className="game-filter__title-block">
        <p className="game-filter__title-text">Browse Games</p>
      </div>
      <div className="game-filter__main-block">
        <p className="game-filter__filter-title">State</p>
        {/*     <IconDown /> */}
        <div className="game-filter__checkbox-list">
          <label className="game-filter__checkbox-item" htmlFor="item1">
            <input type="checkbox" id="item1" />
            <span className="game-filter__checkbox-checkmark" />
            <p className="game-filter__checkbox-text">Avaiable</p>
          </label>
        </div>
      </div>
      <div className="game-filter__main-block">
        <p className="game-filter__filter-title">Genre Filters</p>
        {/* <IconDown /> */}
        {genres.map((genre) => (
          <div className="game-filter__checkbox-list" key={genre.id}>
            <label className="game-filter__checkbox-item" htmlFor={genre.id}>
              <input
                type="checkbox"
                id={genre.id}
                onChange={addFilterToList}
                value={genre.name}
              />
              <span className="game-filter__checkbox-checkmark" />
              <p className="game-filter__checkbox-text">{genre.name}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameFilterContainer;
