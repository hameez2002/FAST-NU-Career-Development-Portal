import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ job, onConfirm, onCancel }) => {
  const [formData, setFormData] = useState({ ...job });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal-container">
        <div className="edit-modal-header">
          <h2 className="edit-modal-title">Edit Job</h2>
          <button className="edit-modal-close-btn" onClick={onCancel}>
            <svg
              className="edit-modal-close-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="edit-modal-form">
          {/* Job Title */}
          <div className="edit-modal-form-group">
            <label htmlFor="jobTitle" className="edit-modal-label">
              Job Title:
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          {/* Job Type */}
          <div className="edit-modal-form-group">
            <label htmlFor="jobType" className="edit-modal-label">
              Job Type:
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              className="edit-modal-input"
            >
              <option value="On-site">On-site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="jobDescription" className="edit-modal-label">
              Job Description:
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="jobLink" className="edit-modal-label">
              Job Link:
            </label>
            <input
              type="text"
              id="jobLink"
              name="jobLink"
              value={formData.jobLink}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="deadlineDate" className="edit-modal-label">
              Deadline Date:
            </label>
            <input
              type="date"
              id="deadlineDate"
              name="deadlineDate"
              value={formData.deadlineDate}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="noOfOpenings" className="edit-modal-label">
            No. of Openings:
            </label>
            <input
              type="number"
              id="noOfOpenings"
              name="noOfOpenings"
              value={formData.noOfOpenings}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="qualificationRequirements" className="edit-modal-label">
            Qualification Requirements:
            </label>
            <textarea
              id="qualificationRequirements"
              name="qualificationRequirements"
              value={formData.qualificationRequirements}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="responsibilities" className="edit-modal-label">
            Responsibilities:
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="about" className="edit-modal-label">
            About:
            </label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="jobStatus" className="edit-modal-label">
              Job Status:
            </label>
            <input
              type="text"
              id="jobStatus"
              name="jobStatus"
              value={formData.jobStatus}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="postedOn" className="edit-modal-label">
              Posted On:
            </label>
            <input
              type="date"
              id="postedOn"
              name="postedOn"
              value={formData.postedOn}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          <div className="edit-modal-form-group">
            <label htmlFor="updatedOn" className="edit-modal-label">
              Updated On:
            </label>
            <input
              type="date"
              id="updatedOn"
              name="updatedOn"
              value={formData.updatedOn}
              onChange={handleInputChange}
              className="edit-modal-input"
            />
          </div>
          {/* Other input fields go here */}
          <div className="edit-modal-footer">
            <button
              type="button"
              onClick={onCancel}
              className="edit-modal-btn edit-modal-cancel-btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="edit-modal-btn edit-modal-save-btn"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
