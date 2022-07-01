import React, { useState, useRef } from "react";
import { signUp } from "../services/auth";
import Alert from "./Alert";
import { logAnalyticsEvent } from "../services/analytics";

function SignupModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const closeButtonRef = useRef("");

  const handleSignup = () => {
    const response = signUp(email, password);
    response
      .then((userCredential) => {
        // Signed up and signed in
        // const user = userCredential.user;
        setAlertMessage(() => "");
        logAnalyticsEvent("signup");
        resetForm();
        closeButtonRef.current.click();
      })
      .catch((error) => {
        setAlertMessage(() => error.message);
        setAlertType(() => "danger");
        console.error(error.code);
      });
  };

  const resetForm = () => {
    setEmail(() => "");
    setPassword(() => "");
    setAlertMessage(() => "");
  };

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-light bg-dark">
            <h5 className="modal-title" id="signupModalLabel">
              Create an account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="inputEmailSignup" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmailSignup"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPasswordSignup" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordSignup"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            {alertMessage && <Alert message={alertMessage} type={alertType} />}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              ref={closeButtonRef}
              onClick={() => resetForm()}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
