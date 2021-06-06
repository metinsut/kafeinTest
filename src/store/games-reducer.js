import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

//SELECTORS
const getGenresSelector = (state) => state.games.genres;
const getGamesSelector = (state) => state.games.games;
const gamesDetailListsByGameFirstLetterSelector = (state) =>
  state.games.gamesDetailListsByGameFirstLetter;
const getSortTypeSelector = (state) => state.games.sortType;
const getFilterTypesSelector = (state) => state.games.filterTypes;
const getSearchLetterSelector = (state) => state.games.searchLetters;

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

const getGamesBySortFilterSearchSelector = createSelector(
  [
    gamesDetailListsByGameFirstLetterSelector,
    getSortTypeSelector,
    getFilterTypesSelector,
    getSearchLetterSelector,
  ],
  (
    gamesListByFirstLetter,
    sortType = "AZ",
    filterTypes = [],
    searchLetters = ""
  ) => {
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

    const searchedWordsList = Object.entries(filtredGameList).reduce(
      (acc, [key, [...games]]) => {
        const searchedGames = games.filter((game) => {
          return game.title.toLowerCase().includes(searchLetters.toLowerCase());
        });
        if (searchedGames.length > 0) {
          acc[key] = searchedGames;
        }
        return acc;
      },
      {}
    );
    const sortedGameList = Object.keys(searchedWordsList)
      .sort(gameFirstLetterSortBySortType(sortType))
      .reduce((acc, key) => {
        acc[key] = searchedWordsList[key];
        return acc;
      }, {});
    return sortedGameList;
  }
);

const searchedGameTitles = createSelector(
  [getGamesBySortFilterSearchSelector, getSearchLetterSelector],
  (gamesList, searchLetters = "") => {
    const size = 4;
    let searchedGameTitles = [];
    if (searchLetters) {
      searchedGameTitles = Object.values(gamesList)
        .flat()
        .slice(0, size)
        .map((game) => game.title);
    }

    return searchedGameTitles;
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
    searchLetters: "",
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
      if (filterStatus) {
        state.filterTypes.push(filterName);
      } else {
        const filteredTypes = state.filterTypes.filter(
          (item) => item !== filterName
        );
        state.filterTypes = filteredTypes;
      }
    },
    addSearchLetters: (state, { payload }) => {
      state.searchLetters = payload;
    },
  },
});

export const {
  setGamesAndGenres,
  toggleSortType,
  addFilterTypes,
  addSearchLetters,
} = gamesSlice.actions;

export {
  getGenresSelector,
  getGamesSelector,
  getGamesBySortFilterSearchSelector,
  searchedGameTitles,
};

export default gamesSlice.reducer;
