import React, { useState, useEffect } from "react";
import "./JobList.css";
import axios from "axios";

const JobList = ({ onJobClick, onDeleteJobClick, onEditJobClick }) => {
  const [jobs, setJobs] = useState([]);

  console.log("Received jobs prop:", jobs);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Invalid Date";
    }
  
    const [month, day, year] = dateString.split("-");
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      timeZone: "UTC",
    };
    return new Date(`${year}-${month}-${day}`).toLocaleDateString("en-GB", options);
  };

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get("http://localhost:7000/jobs");
        console.log("Response data:", response.data);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };
    fetchJobPostings();
  }, []);

  return (
    <ul className="job-list">
      {jobs.map((job) => (
        <li key={job.id}>
          <h2 className="job-title">{job.Title}</h2>
          <p className="job-type">{job.Type}</p>
          <p className="job-description">{job.Description}</p>
          <p className="job-link">
            Click Here to Apply: <a href={job.Link}>{job.jobLink}</a>
          </p>
          <p className="job-deadline">
            Deadline: {formatDate(job.deadlineDate)}
          </p>
          <button
            className="delete-job"
            onClick={() => onDeleteJobClick(job.id)}
          >
            Delete
          </button>
          <button className="edit-job" onClick={() => onEditJobClick(job.id)}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
