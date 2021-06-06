import React from "react";
import { useSelector } from "react-redux";
import IconPolygon from "../../svg-files/polygon-icon-svg";
import {
  getGamesBySortFilterSearchSelector,
  toggleSortType,
} from "../../store/games-reducer";
import { useDispatch } from "react-redux";

const GameListContainer = () => {
  const dispatch = useDispatch();
  const gameListByFirstLetter = useSelector(getGamesBySortFilterSearchSelector);
  const handleSortType = (sortType) => {
    dispatch(toggleSortType(sortType.target.value));
  };
  return (
    <section className="game-list">
      <div className="game-list__selectbox-block">
        <select className="game-list__selectbox-item" onChange={handleSortType}>
          <option value="AZ">Title A-Z</option>
          <option value="ZA">Title Z-A</option>
        </select>
      </div>
      {Object.entries(gameListByFirstLetter).map(([key, [...games]]) => (
        <article className="game-card" key={key}>
          <div className="game-card__card-icon">
            <IconPolygon />
            <div className="game-card__card-word">{key}</div>
          </div>
          <div className="game-card__card-gameList">
            {games.map((game) => (
              <p className="game-card__card-gameName" key={game.id}>
                {game.title}
              </p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default GameListContainer;
