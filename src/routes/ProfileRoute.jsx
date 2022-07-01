import React, { useEffect, useState } from "react";
import { getAuthState } from "../services/auth";

function ProfileRoute() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthState((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // console.log(user);
        // const uid = user.uid;
        setUser(() => user);
      } else {
        setUser(() => null);
      }
    });
  });

  const getUserProps = (user) => {
    return {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
      providerData: user.providerData,
      createdAt: new Date(parseInt(user.metadata.createdAt)).toDateString(),
      lastLoginAt: new Date(parseInt(user.metadata.lastLoginAt)).toDateString(),
    };
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col d-flex justify-content-center align-items-center">
            {user && (
              <div className="card">
                <h5 className="card-header text-light bg-success">Your info</h5>
                <div className="card-body">
                  <pre style={{ height: "100%" }}>
                    {JSON.stringify(getUserProps(user), null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileRoute;
