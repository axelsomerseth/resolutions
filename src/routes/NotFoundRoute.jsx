import React from "react";
import Navbar from "./Navbar";

function NotFoundRoute() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h1 className="h1">Nothing was found.</h1>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default NotFoundRoute;
