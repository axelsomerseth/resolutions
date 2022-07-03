import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { logOut } from "../services/auth";
import { UserContext } from "../App";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        navigate("/", { replace: true });
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span>&#x1F3AF;</span>
          <span>&nbsp;&nbsp;Resolutions</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto"></ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link active">
                    Profile
                  </Link>
                </li>
                <li className="ms-lg-3">
                  <button className="btn btn-warning" onClick={handleLogOut}>
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Log in
                  </button>
                </li>
                <li className="ms-lg-3">
                  <button
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                  >
                    Sign up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <LoginModal />
      <SignupModal />
    </nav>
  );
}

export default Navbar;
