import React, { useEffect, useState } from "react";
import {
  listResolutionsRealtime,
  deleteResolution,
} from "../services/firestore";
import { timeAgo, hexToRGB } from "../utils";
import { Link } from "react-router-dom";

function ResolutionCards() {
  const [resolutions, setResolutions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // runs on mount
  useEffect(() => {
    setIsLoading(() => true);
    const unsubscribe = listResolutionsRealtime(
      (querySnapshot) => {
        const resolutionDocs = [];
        querySnapshot.forEach((doc) => {
          resolutionDocs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setIsLoading(() => false);
        setResolutions(() => resolutionDocs);
      },
      (error) => {
        console.error(error);
      }
    );

    // runs on un-mount
    return function cleanup() {
      unsubscribe();
    };
  }, []);

  // const handleEdit = (event) => {
  // const docId = event.target.name;
  // console.log(docId);
  // Open a modal
  // };

  const handleDelete = (event) => {
    const docId = event.target.name;
    deleteResolution(docId)
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <>
      {resolutions.length ? (
        resolutions.map((resolution) => {
          return (
            <div
              key={resolution.id}
              className="card"
              style={{
                backgroundColor:
                  hexToRGB(resolution.color, 0.4) || hexToRGB("#fffff"),
              }}
            >
              <div className="row g-0">
                <div className="col-3 col-lg-2 d-flex justify-content-center">
                  <p style={{ fontSize: "80px" }}>{resolution.icon}</p>
                </div>
                <div className="col-8 col-lg-9">
                  <div className="card-body">
                    <h4 className="card-title">{resolution.title}</h4>
                    <p className="card-text">{resolution.resolutionType}</p>
                    <p className="card-text">
                      <em>{timeAgo(new Date(resolution.datetime))}</em>
                    </p>
                  </div>
                </div>
                <div className="col-1 col-lg-1 d-flex flex-column justify-content-evenly align-items-center ">
                  <Link
                    className="btn"
                    to={`/resolutions/${resolution.id}`}
                    name={resolution.id}
                  >
                    &#x270F;
                  </Link>
                  <button
                    className="btn"
                    name={resolution.id}
                    onClick={handleDelete}
                  >
                    &#x274C;
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            {isLoading ? (
              <h1 className="h1">&#x23F3; Loading...</h1>
            ) : (
              <h1 className="h1">No data.</h1>
            )}
          </div>
        </div>
      )}
      <div className="mt-5"></div>
    </>
  );
}

export default ResolutionCards;
