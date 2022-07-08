import React, { useState, useEffect, createContext, useContext } from "react";
import { onAuthChange } from "../services/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

    // Unsubscribing when unmounting this component
    return function cleanUp() {
      unsubscribeOnAuth();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
