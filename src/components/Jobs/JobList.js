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

    const formattedDate = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const handleJobLinkClick = (event, jobLink) => {
    console.log("link clicked");
    event.preventDefault();

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
            <h2 className="job-title text-2xl font-bold mb-2">{job.title}</h2>
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
            <div className="job-details">
              <p><strong>Deadline:</strong> {formatDate(job.Deadline)}</p>
              <p><strong>No. of Openings:</strong> {job.no_of_openings}</p>
              <p><strong>Qualification Requirements:</strong> {job.qualifications_req}</p>
              <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
              <p><strong>About:</strong> {job.about}</p>
              <p><strong>Job Status:</strong> {job.job_status}</p>
              <p><strong>Posted On:</strong> {formatDate(job.posted_on)}</p>
              <p><strong>Updated On:</strong> {formatDate(job.updated_on)}</p>
            </div>
            <div className="button-container mt-4 flex justify-center">
              <button
                className="delete-job bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
                onClick={() => onDeleteJobClick(job)}
              >
                Delete
              </button>
              <button
                className="edit-job bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
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
