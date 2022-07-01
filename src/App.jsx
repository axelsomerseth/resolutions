import React, { useState, useEffect, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { onAuthChange } from "./services/auth";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribeOnAuth = onAuthChange(
      (user) => {
        if (user) {
          // User is signed in
          setUser(() => user);
        } else {
          // User is signed out
          setUser(() => null);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    navigate("/resolutions");

    // Unsubscribing when unmounting this component
    return function cleanUp() {
      unsubscribeOnAuth();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
