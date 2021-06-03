import React from "react";
import IconPolygon from "../../svg-files/polygon-icon-svg";

const GameListContainer = () => {
  return (
    <div className="game-list">
      <div className="game-list__selectbox-block">
        <select className="game-list__selectbox-item">
          <option value="">Title A-Z</option>
          <option value="">Title Z-A</option>
        </select>
      </div>
      <div className="game-card">
        <div className="game-card__card-icon">
          <IconPolygon />
          <div className="game-card__card-word">A</div>
        </div>
        <div className="game-card__card-detail">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  );
};

export default GameListContainer;
