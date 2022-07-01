import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  readResolution,
  updateResolution,
  deleteResolution,
} from "../services/firestore";
import { logAnalyticsEvent } from "../services/analytics";
import { timeAgo } from "../utils";

function EditResolution() {
  const [id, setId] = useState("");
  const [resolutionType, setResolutionType] = useState("Quit a bad habit");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("#000000");
  const [datetime, setDatetime] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
  const [updatedAt, setUpdatedAt] = useState(new Date());

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setId(() => params.resolutionId);
    readResolution(params.resolutionId)
      .then((snapshot) => {
        const doc = {
          ...snapshot.data(),
        };
        setResolutionType(() => doc.resolutionType);
        setTitle(() => doc.title);
        setIcon(() => doc.icon);
        setColor(() => doc.color);
        setDatetime(() => doc.datetime);
        setCreatedAt(() => doc.createdAt.toDate());
        setUpdatedAt(() => doc.updatedAt.toDate());
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);

  const handleBack = () => {
    navigate("/resolutions");
  };

  const handleDelete = () => {
    const docId = id;
    deleteResolution(docId)
      .then(() => {
        logAnalyticsEvent("resolution_deleted");
        handleBack();
      })
      .catch((error) => console.error(error));
  };

  const handleSave = () => {
    const resolutionToUpdate = {
      resolutionType,
      title,
      icon,
      color,
      datetime,
    };
    updateResolution(id, resolutionToUpdate)
      .then(() => {
        logAnalyticsEvent("resolution_updated");
        handleBack();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col d-flex justify-content-center">
            <h1>Edit Resolution</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-lg-8">
            <form id="editResolutionForm">
              <div className="mb-3">
                <label htmlFor="resolutionTypeSelect">Resolution Type</label>
                <select
                  id="resolutionType"
                  name="resolutionType"
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
        </div>
        <div className="row mb-3">
          <div className="col d-flex justify-content-end">
            <span>Created on: {createdAt.toLocaleDateString()}</span>
          </div>
          <div className="col d-flex justify-content-start">
            <span>Updated: {timeAgo(updatedAt)}</span>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleBack}
            >
              &#x2B05; Back
            </button>
          </div>
          <div className="col d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              &#x1F5D1; Delete
            </button>
          </div>
          <div className="col d-flex justify-content-start">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              &#x1F4BE; Save
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5"></div>
    </>
  );
}

export default EditResolution;
