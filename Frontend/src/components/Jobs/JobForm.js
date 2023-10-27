import React, { useState } from "react";
import "./JobForm.css";
import axios from "axios";

const JobForm = ({ onSubmit, onCancel }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLink, setJobLink] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [jobType, setJobType] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [validationErrors, setValidationErrors] = useState({});

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleJobLinkChange = (event) => {
    setJobLink(event.target.value);
  };

  const handleDeadlineDateChange = (event) => {
    setDeadlineDate(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const validateForm = () => {
    const errors = {};

    if (!jobTitle) {
      errors.jobTitle = "Please enter a job title";
    }

    if (!jobDescription) {
      errors.jobDescription = "Please enter a job description";
    }

    if (!jobLink) {
      errors.jobLink = "Please enter a job link";
    } else if (!jobLink.startsWith("www")) {
      errors.jobLink = "Please enter a valid URL";
    }

    if (!deadlineDate) {
      errors.deadlineDate = "Please enter a deadline date";
    } else if (new Date(deadlineDate) < new Date()) {
      errors.deadlineDate = "Please enter a future date";
    }

    if (!jobType) {
      errors.jobType = "Please choose a job type";
    }

    return errors;
  };

  // const formatDateForServer = (dateString) => {
  //   if (!dateString) {
  //     return null;
  //   }

  //   const dateParts = dateString.split("/");
  //   if (dateParts.length !== 3) {
  //     return null;
  //   }

  //   const [month, day, year] = dateParts;

  //   if (isNaN(month) || isNaN(day) || isNaN(year)) {
  //     return null;
  //   }

  //   const formattedMonth = month.padStart(2, "0");
  //   const formattedDay = day.padStart(2, "0");

  //   return `${year}-${formattedMonth}-${formattedDay}`;
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        console.log("Sending job data:", {
          jobTitle,
          jobType,
          jobDescription,
          jobLink,
          deadlineDate,
        });

        // const formattedDeadlineDate = formatDateForServer(deadlineDate);

        const response = await axios.post("http://localhost:7000/jobs", {
          jobTitle,
          jobType,
          jobDescription,
          jobLink,
          deadlineDate,
        });

        console.log("Received response:", response.data);
        handleShowForm();
      } catch (error) {
        console.error(error);
      }

      setJobTitle("");
      setJobType("");
      setJobDescription("");
      setJobLink("");
      setDeadlineDate("");
    } else {
      setValidationErrors(errors);
    }
  };

  const handleCancel = () => {
    setValidationErrors({});
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <label>
        <span>Job Title:</span>
        <input
          type="text"
          placeholder="Enter Job Title"
          value={jobTitle}
          onChange={handleJobTitleChange}
        />
        {validationErrors.jobTitle && (
          <span className="error-message">{validationErrors.jobTitle}</span>
        )}
      </label>
      <label>
        <span>Job Type:</span>
        <select
          value={jobType}
          className="job-form-select"
          onChange={handleJobTypeChange}
        >
          <option value="">Please Choose a Job Type.</option>
          <option value="On-site">Onsite</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        {validationErrors.jobType && (
          <span className="error-message">{validationErrors.jobType}</span>
        )}
      </label>
      <label>
        <span>Job Description:</span>
        <textarea
          value={jobDescription}
          placeholder="Enter Job Description"
          onChange={handleJobDescriptionChange}
        />
        {validationErrors.jobDescription && (
          <span className="error-message">
            {validationErrors.jobDescription}
          </span>
        )}
      </label>
      <label>
        <span>Job Link:</span>
        <input
          type="text"
          value={jobLink}
          placeholder="Enter Job Link"
          onChange={handleJobLinkChange}
        />
        {validationErrors.jobLink && (
          <span className="error-message">{validationErrors.jobLink}</span>
        )}
      </label>
      <label>
        <span>Deadline Date:</span>
        <input
          type="date"
          value={deadlineDate}
          onChange={handleDeadlineDateChange}
        />
        {validationErrors.deadlineDate && (
          <span className="error-message">{validationErrors.deadlineDate}</span>
        )}
      </label>
      <div className="button-container">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" className="cancel-button" onClick={handleCancel}>
          Close
        </button>
      </div>
    </form>
  );
};

export default JobForm;
