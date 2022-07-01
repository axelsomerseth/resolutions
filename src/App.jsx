import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./routes/Navbar";

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/resolutions");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div className="container-fluid justify-content-center">
            <div className="row">
              <div className="col">
                <span className="text-muted" style={{ fontSize: "13px" }}>
                  Made with &#x1FAF6;.
                </span>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;
