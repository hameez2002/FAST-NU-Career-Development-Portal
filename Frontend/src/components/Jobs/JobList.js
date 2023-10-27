import React from "react";
import "./JobList.css";

const JobList = ({ jobs, onJobClick, onDeleteJobClick, onEditJobClick }) => {
  const formatDate = (dateString) => {
    if (!dateString) {
      return "Invalid Date";
    }

    const date = new Date(dateString);

    if (isNaN(date)) {
      return "Invalid Date";
    }

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <ul className="job-list">
      {jobs.map((job) => (
        <li key={job.ID}>
          <h2 className="job-title">{job.Title}</h2>
          <p className="job-type">{job.Type}</p>
          <p className="job-description">{job.Description}</p>
          <p className="job-link">
            Click Here to Apply: <a href={job.Link}>{job.Link}</a>
          </p>
          <p className="job-deadline">
            Deadline: {formatDate(job.deadlineDate)}
          </p>
          <button className="delete-job" onClick={() => onDeleteJobClick(job)}>
            Delete
          </button>
          <button className="edit-job" onClick={() => onEditJobClick(job.ID)}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
