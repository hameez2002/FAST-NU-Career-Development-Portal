import React, { useState } from "react";
import axios from "axios";
import "./UserProfile.css";

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    discipline: "",
    gradYear: "",
    cgpa: "",
    tagline: "",
    personalStatement: "",
    certificates: [""],
    experiences: [""],
    skills: [""],
  });

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Submit profileData to the backend
      await axios.post("http://localhost:7000/profile", profileData);
      console.log("Profile Data Submitted Successfully!");
      setEditMode(false); // Disable edit mode after successful submission
    } catch (error) {
      console.error("Error submitting profile data:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCertificate = () => {
    setProfileData((prevData) => ({
      ...prevData,
      certificates: [...prevData.certificates, ""],
    }));
  };

  const handleAddExperience = () => {
    setProfileData((prevData) => ({
      ...prevData,
      experiences: [...prevData.experiences, ""],
    }));
  };

  const handleChangeCertificate = (index, value) => {
    setProfileData((prevData) => {
      const updatedCertificates = [...prevData.certificates];
      updatedCertificates[index] = value;
      return {
        ...prevData,
        certificates: updatedCertificates,
      };
    });
  };

  const handleChangeExperience = (index, value) => {
    setProfileData((prevData) => {
      const updatedExperiences = [...prevData.experiences];
      updatedExperiences[index] = value;
      return {
        ...prevData,
        experiences: updatedExperiences,
      };
    });
  };

  return (
    <div className="user-profile">
      <h2 className="user-profile-heading">My Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-form-row">
          {/* Profile Picture */}
          <div className="user-form-group">
            <label
              className="user-label profile-picture"
              htmlFor="profilePicture"
            >
              Profile Picture:
            </label>
            <div className="profile-picture-container">
              {editMode ? (
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  onChange={handleImageChange}
                />
              ) : (
                <img
                  src={selectedImage ? URL.createObjectURL(selectedImage) : ""}
                  alt="Profile"
                  className="profile-picture"
                />
              )}
            </div>
          </div>
        </div>
        {/* Other input fields */}
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="firstName">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input"
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
              value={profileData.lastName}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input"
            />
          </div>
          <div className="user-form-group">
            <label className="user-label" htmlFor="contact">
              Contact:
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={profileData.contact}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input"
            />
          </div>
        </div>

        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="discipline">
              Discipline:
            </label>
            <input
              type="text"
              id="discipline"
              name="discipline"
              value={profileData.discipline}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input"
            />
          </div>
          <div className="user-form-group">
            <label className="user-label" htmlFor="gradYear">
              Year of Graduation:
            </label>
            <input
              type="number"
              id="gradYear"
              name="gradYear"
              value={profileData.gradYear}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input"
            />
          </div>
          <div className="user-form-group">
            <label className="user-label" htmlFor="cgpa">
              CGPA:
            </label>
            <input
              type="float"
              id="cgpa"
              name="cgpa"
              value={profileData.cgpa}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input"
            />
          </div>
        </div>

        {/* Certificates */}
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="certificates">
              Certificates:
            </label>
            {profileData.certificates.map((certificate, index) => (
              <input
                key={index}
                type="text"
                value={certificate}
                onChange={(e) => handleChangeCertificate(index, e.target.value)}
                disabled={!editMode}
                className="bigger-user-input"
              />
            ))}
            {editMode && (
              <button type="button" onClick={handleAddCertificate}>
                Add Certificate
              </button>
            )}
          </div>
        </div>

        {/* Experiences */}
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="experiences">
              Experiences:
            </label>
            {profileData.experiences.map((experience, index) => (
              <input
                key={index}
                type="text"
                value={experience}
                onChange={(e) => handleChangeExperience(index, e.target.value)}
                disabled={!editMode}
                className="bigger-user-input"
              />
            ))}
            {editMode && (
              <button type="button" onClick={handleAddExperience}>
                Add Experience
              </button>
            )}
          </div>
        </div>
        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="tagline">
              Tagline:
            </label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={profileData.tagline}
              onChange={handleChange}
              disabled={!editMode}
              className="expanded-user-input"
            />
          </div>
        </div>

        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="personalStatement">
              Personal Statement:
            </label>
            <input
              type="text"
              id="personalStatement"
              name="personalStatement"
              value={profileData.personalStatement}
              onChange={handleChange}
              disabled={!editMode}
              className="expanded-user-input"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="user-form-group user-buttons">
          <button
            type="submit"
            className="user-profile-btn user-profile-button-primary"
            style={{ display: editMode ? "block" : "none" }}
          >
            Save
          </button>
          <button
            type="button"
            className="user-profile-btn user-profile-button-secondary"
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
