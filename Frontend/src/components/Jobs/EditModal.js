import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ job, onConfirm, onCancel }) => {
  const [formData, setFormData] = useState({
    jobTitle: job.jobTitle,
    jobType: job.jobType,
    jobDescription: job.jobDescription,
    jobLink: job.jobLink,
    deadlineDate: job.deadlineDate,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={onCancel}>X</button>
        </div>
        <h2 className="title">Edit Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="body">
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobType">Job Type:</label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
              >
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="jobDescription">Job Description:</label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobLink">Job Link:</label>
              <input
                type="text"
                id="jobLink"
                name="jobLink"
                value={formData.jobLink}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="deadlineDate">Deadline Date:</label>
              <input
                type="date"
                id="deadlineDate"
                name="deadlineDate"
                value={formData.deadlineDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="footer">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
