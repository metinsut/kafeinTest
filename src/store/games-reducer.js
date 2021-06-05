import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

//SELECTORS
const getGenresSelector = (state) => state.games.genres;
const getGamesSelector = (state) => state.games.games;
const gamesDetailListsByGameFirstLetterSelector = (state) =>
  state.games.gamesDetailListsByGameFirstLetter;
const getSortTypeSelector = (state) => state.games.sortType;
const getFilterTypesSelector = (state) => state.games.filterTypes;

const gameFirstLetterSortBySortType =
  (sortType) => (firstLetter1, firstLetter2) => {
    const item1 = firstLetter1.toLowerCase();
    const item2 = firstLetter2.toLowerCase();
    if (sortType === "AZ") {
      if (item1 < item2) return -1;
      if (item1 > item2) return 1;
      return 0;
    }
    if (sortType === "ZA") {
      if (item1 > item2) return -1;
      if (item1 < item2) return 1;
      return 0;
    }
    return 0;
  };

const getGamesBySortedAndFilteredSelector = createSelector(
  [
    gamesDetailListsByGameFirstLetterSelector,
    getSortTypeSelector,
    getFilterTypesSelector,
  ],
  (gamesListByFirstLetter, sortType = "AZ", filterTypes = []) => {
    const filtredGameList = Object.entries(gamesListByFirstLetter).reduce(
      (acc, [key, [...games]]) => {
        const filteredGames = games.filter((game) => {
          return filterTypes.every((filter) => {
            return game.genres.indexOf(filter) >= 0;
          });
        });
        if (filteredGames.length) {
          acc[key] = filteredGames;
        }
        return acc;
      },
      {}
    );

    const sortedGameList = Object.keys(filtredGameList)
      .sort(gameFirstLetterSortBySortType(sortType))
      .reduce((acc, key) => {
        acc[key] = filtredGameList[key];
        return acc;
      }, {});
    return sortedGameList;
  }
);

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    genres: [],
    gamesDetailListsByGameFirstLetter: {},
    sortType: "AZ",
    filterTypes: [],
  },
  reducers: {
    setGamesAndGenres: (state, { payload }) => {
      const combineList = payload.games.reduce(
        (acc, game) => {
          const getFirstLetter = game.title.charAt(0).toUpperCase();
          acc.firstLetterList = [...acc.firstLetterList, getFirstLetter];
          acc.firstLetterList = [...new Set(acc.firstLetterList)];
          acc.gamesDetailListsByGameFirstLetter[getFirstLetter] = [
            ...(acc.gamesDetailListsByGameFirstLetter[getFirstLetter] || []),
            game,
          ];
          return acc;
        },
        {
          firstLetterList: [],
          gamesIdByGameFirstLetter: {},
          gamesDetailListsByGameFirstLetter: {},
        }
      );
      state.gamesDetailListsByGameFirstLetter =
        combineList.gamesDetailListsByGameFirstLetter;
      state.games = payload.games;
      state.genres = payload.genres;
    },
    toggleSortType: (state, { payload }) => {
      state.sortType = payload;
    },
    addFilterTypes: (state, { payload }) => {
      const { filterName, filterStatus } = payload;
      console.log(filterName, filterStatus);
      if (filterStatus) {
        state.filterTypes.push(filterName);
      } else {
        const filteredTypes = state.filterTypes.filter(
          (item) => item !== filterName
        );
        state.filterTypes = filteredTypes;
      }
    },
  },
});

export const { setGamesAndGenres, toggleSortType, addFilterTypes } =
  gamesSlice.actions;

export {
  getGenresSelector,
  getGamesSelector,
  getGamesBySortedAndFilteredSelector,
};

export default gamesSlice.reducer;
