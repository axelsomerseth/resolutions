import React, { useContext } from "react";
import ResolutionCards from "./ResolutionCards";
import AddResolution from "./AddResolution";
import { UserContext } from "../App";

function Resolutions() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col d-flex justify-content-center">
            {user && (
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#createResolutionModal"
              >
                &#x1F195; Add Resolution
              </button>
            )}
            {user && <AddResolution />}
          </div>
        </div>
        <div className="row mt-2"></div>
        {user ? (
          <div className="row row-cols g-3 mt-3">
            <ResolutionCards />
          </div>
        ) : (
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="h1">Please log in to use the app.</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Resolutions;
