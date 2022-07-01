import React from "react";
import ResolutionCards from "./ResolutionCards";
import AddResolution from "./AddResolution";

function Resolutions() {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col d-flex justify-content-center">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#createResolutionModal"
            >
              &#x1F195; Add Resolution
            </button>
            <AddResolution />
          </div>
        </div>
        <div className="row mt-2"></div>
        <div className="row row-cols g-3 mt-3">
          <ResolutionCards />
        </div>
      </div>
    </>
  );
}

export default Resolutions;
