import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

export const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  //console.log(data);

  const url = useSelector((state) => state.home.url);
  //console.log("nikal", url.backdrop);
  const navigate = useNavigate();
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    //console.log("bg", bg);
  }, [data]);
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className="relative mb-9 bg justify-center bg-black bg-sla ">
        <div className="background-container   bg-cover bg-center flex top-0 justify-center items-center">
          {loading ? null : (
            <>
              <img src={background} className="max-w-full max-md:h-96  top-0" />
              <div className="w-full h-24 bg-gradient-to-b from-transparent to-slate-900 absolute bottom-0 left-0"></div>
              <div className="absolute font-bold w-4/5 md:w-2/5 flex flex-col items-center justify-center">
                <div className="md:text-6xl max-md:text-6xl font-serif text-slate-50">
                  Welcome.
                </div>
                <span className="font-serif text-slate-50 mb-6 w-4/5 md:w-96">
                  Millions of movies, TV shows, and people to discover. Explore
                  now.
                </span>
                <div className="flex h-4/5 md:h-3/5">
                  <input
                    className="rounded-l-lg w-full sm:w-1/2 md:w-96 h-10 md:h-12 pl-4 md:pl-6 text-base md:text-lg text-black placeholder-gray-400"
                    type="text"
                    placeholder="Search for a movie or tv show...."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                  />

                  <button className="w-1/4 md:w-20 rounded-r-lg bg-gradient-to-r from-amber-300 to-red-600">
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
          //
        </div>
      </div>
    </>
  );
};
