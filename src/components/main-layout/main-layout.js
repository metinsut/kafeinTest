import React from "react";
import GameFilterContainer from "./game-filter-container";
import GameListContainer from "./game-list-container";

const MainLayout = () => {
  return (
    <div className="main-layout__wrapper">
      <GameFilterContainer />
      <GameListContainer />
    </div>
  );
};

export default MainLayout;
