import React, { useState } from "react";
import axios from "axios";
import "./UserProfile.css";
import { FaEdit, FaSave } from "react-icons/fa"; // Import icons

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
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile sent");
    // try {
    //   // Submit profileData to the backend
    //   await axios.post("http://localhost:7000/profile", profileData);
    //   console.log("Profile Data Submitted Successfully!");
    //   setEditMode(false); // Disable edit mode after successful submission
    // } catch (error) {
    //   console.error("Error submitting profile data:", error);
    // }
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

  const handleAddSkill = () => {
    setProfileData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, ""],
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

  const handleChangeSkills = (index, value) => {
    setProfileData((prevData) => {
      const updatedSkills = [...prevData.skills];
      updatedSkills[index] = value;
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  return (
    <div className={`user-profile ${editMode ? "edit-mode" : ""}`}>
      <h2 className="user-profile-heading">My Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-form-row">
          <div className="user-form-group profile-picture-container">
            {editMode ? (
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleImageChange}
              />
            ) : (
              <div className="profile-picture">
                <img
                  src={selectedImage ? URL.createObjectURL(selectedImage) : ""}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            )}
          </div>
        </div>

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
              type="tel"
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
              type="number"
              id="cgpa"
              name="cgpa"
              value={profileData.cgpa}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input"
              step="0.01"
            />
          </div>
        </div>

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
                className="user-input"
              />
            ))}
            {editMode && (
              <button type="button" onClick={handleAddCertificate}>
                Add Certificate
              </button>
            )}
          </div>
        </div>

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
                className="user-input"
              />
            ))}
            {editMode && (
              <button type="button" onClick={handleAddExperience}>
                Add Experience
              </button>
            )}
          </div>
        </div>

        {/* <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="experiences">
              Skills:
            </label>
            {profileData.skills.map((skills, index) => (
              <input
                key={index}
                type="text"
                value={skills}
                onChange={(e) => handleChangeSkills(index, e.target.value)}
                disabled={!editMode}
                className="user-input"
              />
            ))}
            {editMode && (
              <button type="button" onClick={handleAddSkill}>
                Add Skill
              </button>
            )}
          </div>
        </div> */}

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
              className="user-input"
            />
          </div>
        </div>

        <div className="user-form-row">
          <div className="user-form-group">
            <label className="user-label" htmlFor="personalStatement">
              Personal Statement:
            </label>
            <textarea
              id="personalStatement"
              name="personalStatement"
              value={profileData.personalStatement}
              onChange={handleChange}
              disabled={!editMode}
              className="user-input user-textarea"
            ></textarea>
          </div>
        </div>

        <div className="user-form-group user-buttons">
          <button
            type="button"
            onClick={handleEditClick} // Bind handleEditClick function here
            className={`user-profile-btn ${editMode ? "secondary" : "primary"}`}
          >
            {editMode ? <FaSave /> : <FaEdit />}
            {editMode ? "Save" : "Edit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
