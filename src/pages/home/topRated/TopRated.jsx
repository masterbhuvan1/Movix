import React, { useState } from "react";
import { SwitchTabs } from "../../../components/switch-tabs/switchTabs";

import useFetch from "../../../hooks/useFetch";
import { Carousel } from "../../../components/carousel/Carousel";
export const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  //console.log(data);
  const onTabChange = (tab) => {
    console.log("nikal");
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div
      className="content relative mb-7  items-center   "
      // style={{ width:100%}}
    >
      {/* <div className="items-center flex  mt-6 mb-7 relative w-screen"> */}
      <div className=" true items-center flex max-w-screen-xl justify-between mb-2   mx-auto mt-0">
        <div className=" text-white text-2xl">Top Rated</div>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </div>
      <div
        className="flex justify-center max-w-screen-xl items-center px-2 mx-auto  "
        style={{ height: 500 }}
      >
        {/* Wrap Carousel with a flex container for vertical alignment */}
        <Carousel data={data?.results} loading={loading} />
      </div>
    </div>
  );
};
