//UserProfile.js
import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to the server
    setEditMode(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              disabled={!editMode}
            />
          </div>
          <div className="user-form-group">
            <label className="user-label" htmlFor="lastName">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              disabled={!editMode}
            />
          </div>
        </div>
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="gradYear">
              Year of Graduation:
            </label>
            <input
              type="text"
              id="gradYear"
              name="gradYear"
              disabled={!editMode}
            />
          </div>
          <div className="user-form-group">
            <label className="user-label" htmlFor="discipline">
              Discipline:
            </label>
            <input
              type="text"
              id="discipline"
              name="discipline"
              disabled={!editMode}
            />
          </div>
        </div>
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="contact">
              Contact:
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              disabled={!editMode}
            />
          </div>
          <div className="user-form-group">
            <label className="user-label" htmlFor="tagline">
              Tagline:
            </label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              disabled={!editMode}
            />
          </div>
        </div>
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="cgpa">
              CGPA:
            </label>
            <input type="float" id="cgpa" name="cgpa" disabled={!editMode} />
          </div>
          <div className="user-form-group">
            <label className="user-label" htmlFor="personal_statement">
              Personal Statement:
            </label>
            <input
              type="text"
              id="personal_statement"
              name="personal_statement"
              disabled={!editMode}
            />
          </div>
        </div>
        <div className="user-form-group">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ display: editMode ? "block" : "none" }}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleEditClick}
            style={{ display: editMode ? "none" : "block" }}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
