import React, { useContext } from "react";
import { UserContext } from "../App";

function Profile() {
  const { user } = useContext(UserContext);

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

export default Profile;
