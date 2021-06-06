import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header/header";
import SearchBanner from "./components/search-banner/search-banner";
import MainLayout from "./components/main-layout/main-layout";
import { setGamesAndGenres } from "./store/games-reducer";
import gamesAndGenres from "./json/games.json";
import Footer from "./components/footer/footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGamesAndGenres(gamesAndGenres));
  }, []);
  return (
    <>
      <Header />
      <SearchBanner />
      <MainLayout />
      <Footer />
    </>
  );
};

export default App;
