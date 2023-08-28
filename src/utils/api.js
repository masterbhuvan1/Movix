import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
//const TMDB_TOKEN = 'dfa491ad384cc9f0e36e5a37c2d985c3';
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  accept: "application/json",
  Authorization: "Bearer " + TMDB_TOKEN,
};
//https://api.themoviedb.org/3/movie/upcoming?api_key=dfa491ad384cc9f0e36e5a37c2d985c3
//const api = `https://api.themoviedb.org/3/movie/${e}?api_key=dfa491ad384cc9f0e36e5a37c2d985c3`;
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(
      BASE_URL + "/" + url + "?api_key=dfa491ad384cc9f0e36e5a37c2d985c3",
      {
        headers,
        params,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const fetchDataFromApiSearch = async (url, params) => {
  try {
    const { data } = await axios.get(
      BASE_URL + "/" + url + "api_key=dfa491ad384cc9f0e36e5a37c2d985c3",
      {
        headers,
        params,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
