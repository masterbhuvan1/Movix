import React, { useState } from "react";
import { PlayButton } from "../PlayButton";

// import VideoPopup from "../../../components/videoPopup/VideoPopup";
// import Img from "../../../components/lazyLoadImage/Img";
// import { PlayIcon } from "../Playbtn";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection relative   max-w-screen-xl items-center mx-auto mb-9">
      {/* <ContentWrapper> */}
      <div className="sectionHeading  text-start  text-white font-light   text-2xl mb-[25px]">
        Official Videos
      </div>
      {!loading ? (
        <div
          className="videos gap-[20px] 
        flex overflow-x-auto overflow-hidden no-scrollbar content-center"
        >
          {data?.results?.map((video) => (
            <div
              key={video.id}
              className="videoItem     flex-shrink-0 "
              onClick={() => {
                setVideoId(video.key);
                setShow(true);
              }}
              // style={{ width: "25%" }}
            >
              <div className="videoThumbnail relative background-container bg-cover bg-center   ">
                <img
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  className=" "
                />
                <div className=" flex absolute top-16 left-32    justify-center">
                  <PlayButton className="" />
                </div>
              </div>

              <div className="videoTitle text-white mt-5">{video.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="videoSkeleton">
          {loadingSkeleton()}
          {loadingSkeleton()}
          {loadingSkeleton()}
          {loadingSkeleton()}
        </div>
      )}
      {/* </ContentWrapper> */}
      {/* <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      /> */}
    </div>
  );
};

export default VideosSection;
