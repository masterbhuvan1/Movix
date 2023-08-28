import React from "react";

const Spinner = ({ initial }) => {
  return (
    <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

// const LoadingSpinner = tw.div`w-full h-150px relative flex items-center justify-center`;
// const SpinnerSvg = tw.svg`spinner animate-rotate w-50px h-50px`;
// const PathCircle = tw.circle`path stroke-[hsl(210,70%,75%)] stroke-linecap-round animate-dash`;
// const InitialSpinner = tw.div`h-700px`;

export default Spinner;
