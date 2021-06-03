import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./games-reducer";

export default configureStore({
  reducer: {
    games: gamesReducer,
  },
});
