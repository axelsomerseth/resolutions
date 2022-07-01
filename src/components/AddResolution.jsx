import React, { useState, useRef } from "react";
import { createResolution } from "../services/firestore";
import { logAnalyticsEvent } from "../services/analytics";

function AddResolution() {
  const [resolutionType, setResolutionType] = useState("Quit a bad habit");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("#000000");
  const [datetime, setDatetime] = useState("");

  const closeButtonRef = useRef("");

  const handleSave = () => {
    const newResolution = {
      resolutionType,
      title,
      icon,
      color,
      datetime,
    };
    createResolution(newResolution)
      .then((doc) => {
        logAnalyticsEvent("resolution_created");
        resetForm();
        closeButtonRef.current.click();
      })
      .catch((error) => console.error(error));
  };

  const resetForm = () => {
    setTitle(() => "");
    setIcon(() => "");
    setColor(() => "#000000");
    setDatetime(() => "");
  };

  return (
    <>
      <div
        className="modal fade"
        id="createResolutionModal"
        tabIndex="-1"
        aria-labelledby="createResolutionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createResolutionModalLabel">
                Add Resolution
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="createResolutionForm">
                <div className="mb-3">
                  <label htmlFor="resolutionTypeSelect">Resolution Type</label>
                  <select
                    id="resolutionTypeSelect"
                    name="resolutionTypeSelect"
                    className="form-select"
                    aria-label="Select Resolution Type"
                    value={resolutionType}
                    onChange={(event) => setResolutionType(event.target.value)}
                  >
                    <option value="Quit a bad habit">
                      &#x270B; Quit a bad habit
                    </option>
                    <option value="Form a good habit">
                      &#x1FAA5; Form a good habit
                    </option>
                    <option value="Celebrate happy days">
                      &#x1F389; Celebrate happy days
                    </option>
                    <option value="Commemorate sad days">
                      &#x1F327; Commemorate sad days
                    </option>
                    <option value="Other">&#x2611; Other</option>
                  </select>
                </div>
                {/* Title */}
                <div className="mb-3">
                  <label htmlFor="titleInput" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="titleInput"
                    id="titleInput"
                    className="form-control"
                    placeholder="Enter a title, e.g. Quitted smoking"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                {/* Icon */}
                <div className="mb-3">
                  <label htmlFor="iconInput" className="form-label">
                    Icon
                  </label>
                  <input
                    type="text"
                    name="iconInput"
                    id="iconInput"
                    className="form-control"
                    placeholder="Insert an emoji, e.g. &#x1F6AD;"
                    value={icon}
                    onChange={(event) => setIcon(event.target.value)}
                  />
                </div>
                {/* Color */}
                <div className="mb-3">
                  <label htmlFor="colorInput" className="form-label">
                    Color
                  </label>
                  <input
                    type="color"
                    className="form-control form-control-color"
                    id="colorInput"
                    name="colorInput"
                    title="Choose your desired color"
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                  ></input>
                </div>
                {/* Datetime */}
                <div className="mb-3">
                  <label htmlFor="dateInput" className="form-label">
                    Date
                  </label>
                  <input
                    type="datetime-local"
                    name="datetimeInput"
                    id="datetimeInput"
                    className="form-control"
                    value={datetime}
                    onChange={(event) => setDatetime(event.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => resetForm()}
                ref={closeButtonRef}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddResolution;
