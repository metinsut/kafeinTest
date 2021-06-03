import { createSlice } from "@reduxjs/toolkit";

const getGenres = (state) => state.games.genres;

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    genres: [],
  },
  reducers: {
    fetchGamesAndGenres: (state, { payload }) => {
      state.games = payload.games;
      state.genres = payload.genres;
    },
  },
});

export const { fetchGamesAndGenres } = gamesSlice.actions;

export { getGenres };

export default gamesSlice.reducer;
