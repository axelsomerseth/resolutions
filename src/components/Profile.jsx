import React, { useContext } from "react";
import { UserContext } from "../App";

function Profile() {
  const { user } = useContext(UserContext);
  const BUST_IN_SILHOUETTE_URL =
    "https://firebasestorage.googleapis.com/v0/b/resolutions-99ef3.appspot.com/o/bust-in-silhouette.png?alt=media&token=b1c2b3dd-449f-4822-a5d6-b9f4a9266665";

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col d-flex justify-content-center align-items-center">
            {user && (
              <div className="card">
                <div className="card-header bg-dark text-center">
                  <h4 className="text-light">Your info</h4>
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src={user.photoURL || BUST_IN_SILHOUETTE_URL}
                    className="card-img"
                    alt="silhouette"
                    style={{ width: "230px", height: "230px" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{user.displayName}</h5>
                  <h5 className="card-subtitle mb-3">
                    <span>Logged as:&nbsp;</span>
                    <span className="text-muted">{user.email}</span>
                  </h5>
                  <p className="card-text">
                    With us since:&nbsp;
                    {new Date(user.metadata.creationTime).toDateString()}
                  </p>
                  <p className="card-text">
                    Last log in:&nbsp;
                    {new Date(user.metadata.lastSignInTime).toDateString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
