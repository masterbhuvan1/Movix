import React from "react";

import { Carousel } from "../../components/carousel/Carousel";
import useFetch from "../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    // <div>
    //   <span className="carouselTitle">{title}</span>
    //   <Carousel
    //     title={title}
    //     data={data?.results}
    //     loading={loading}
    //     endpoint={mediaType}
    //   />
    // </div>
    <div
      className="content   mb-7  items-center   "
      // style={{ width:100%}}
    >
      {/* <div className="items-center flex  mt-6 mb-7 relative w-screen"> */}
      <div className=" true items-center flex max-w-screen-xl justify-between mb-2   mx-auto mt-0">
        <div className=" text-white text-2xl">Recommendation</div>
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

export default Recommendation;
