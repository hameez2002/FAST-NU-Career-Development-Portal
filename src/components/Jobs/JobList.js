import React from "react";
import "./JobList.css";
const JobList = ({ jobs, onDeleteJobClick, onEditJobClick }) => {
  const formatDate = (dateString) => {
    if (!dateString) {
      return "Invalid Date";
    }

    const date = new Date(dateString);

    if (isNaN(date)) {
      console.log("Invalid date string:", dateString);
      return "Invalid Date";
    }

    const formattedDate = date.toISOString().split("T")[0]; // Extract the date part
    return formattedDate;
  };

  const handleJobLinkClick = (event, jobLink) => {
    console.log("link clicked");
    event.preventDefault();

    // If jobLink doesn't start with "http://" or "https://", prepend "http://"
    if (jobLink && !jobLink.startsWith("http://") && !jobLink.startsWith("https://")) {
        jobLink = "http://" + jobLink;
    }
    console.log(jobLink);
    window.open(jobLink, "_blank");
};

  return (
    <div className="container mx-auto">
<div className="job-list">
  {jobs.map((job) => (
    <div key={job.ID} className="job-item bg-gray-100 rounded-lg shadow-md p-6 mb-4">
      <h2 className="job-title text-xl font-bold mb-2">{job.title}</h2>
      <p className="job-type text-lg font-bold mb-2">{job.job_type}</p>
      <p className="job-description text-gray-700 mb-4">{job.job_description}</p>
      <p className="job-link text-blue-500 mb-2">
        <a
          href={job.link}
          className="underline"
          onClick={(event) => handleJobLinkClick(event, job.link)}
        >
          Click here to apply
        </a>
      </p>

      <p className="job-deadline italic mb-2"><strong>Deadline:</strong> {formatDate(job.Deadline)}</p>
      <p className="mb-2"><strong>No. of Openings:</strong> {job.no_of_openings}</p>
      <p className="mb-2"><strong>Qualification Requirements:</strong> {job.qualifications_req}</p>
      <p className="mb-2"><strong>Responsibilities:</strong> {job.responsibilities}</p>
      <p className="mb-2"><strong>About:</strong> {job.about}</p>
      <p className="mb-2"><strong>Job Status:</strong> {job.job_status}</p>
      <p className="mb-2"><strong>Posted On:</strong> {formatDate(job.posted_on)}</p>
      <p className="mb-2"><strong>Updated On:</strong> {formatDate(job.updated_on)}</p>
      <div className="button-container">
  <button
    className="delete-job"
    onClick={() => onDeleteJobClick(job)}
  >
    Delete
  </button>
  <button
    className="edit-job"
    onClick={() => onEditJobClick(job.job_id)}
  >
    Edit
  </button>
</div>
    </div>
  ))}
</div>

    </div>
  );
};

export default JobList;
