import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header";
import SearchBanner from "./components/search-banner/search-banner";
import MainLayout from "./components/main-layout/main-layout";
import { fetchGamesAndGenres } from "./store/games-reducer";
import gamesAndGenres from "./json/games.json";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGamesAndGenres(gamesAndGenres));
  }, []);
  return (
    <>
      <Header />
      <SearchBanner />
      <MainLayout />
    </>
  );
};

export default App;