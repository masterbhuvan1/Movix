import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import { getApiConfiguration } from "./store/homeSlice";
import { fetchDataFromApi } from "./utils/api";
import { Details } from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
// import { PageNotFound } from "./pages/404/pageNotFound";
// import { Explore } from "./pages/explore/explore";
import Explore from "./pages/explore/Explore";
import Footer from "./components/footer/Footer";
import { getGenres } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    //apiTest();
    fetchApiConfig();
    genresCall();
  }, []);
  // const apiTest = () => {
  //   fetchDataFromApi("/movie/popular").then((res) => {
  //     console.log(res);

  //     dispatch(getApiConfiguration(res));
  //   });
  // };
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    console.log("nikal");
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data, "dmsbf");
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movix/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/Movix/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/Movix/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/Movix/explore/:mediaType" element={<Explore />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
