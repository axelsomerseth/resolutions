import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
