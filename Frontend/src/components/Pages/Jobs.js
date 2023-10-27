import React, { useState, useEffect } from "react";
import "./Styles.css";
import JobForm from "../Jobs/JobForm";
import JobList from "../Jobs/JobList";
import EditModal from "../Jobs/EditModal";
import DeleteConfirmationModal from "../Jobs/DeleteConfirmationModal";
import axios from "axios";

export const Jobs = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // eslint-disable-next-line
  const [selectedJobID, setSelectedJobID] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  // eslint-disable-next-line
  const [updatedJob, setUpdatedJob] = useState(null);

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get("http://localhost:7000/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };
    fetchJobPostings();
  }, []);

  const handleAddJobClick = () => {
    setShowForm(true);
  };

  const handleJobSubmit = async (formData) => {
    await axios.post("http://localhost:7000/jobs", formData);

    const response = await axios.get("http://localhost:7000/jobs");

    setJobs(response.data);

    setShowForm(false);
  };

  const handleJobCancel = () => {
    setShowForm(false);
  };

  const handleDeleteJobClick = (job) => {
    console.log("Job in handleDeleteJobClick:", job);
    setSelectedJob(job);
    setShowDeleteModal(true);
  };

  const handleJobDelete = async () => {
    if (selectedJob) {
      try {
        const response = await axios.delete(
          `http://localhost:7000/jobs/${selectedJob.ID}`
        );
        if (response.status === 204) {
          setJobs(jobs.filter((job) => job.ID !== selectedJob.ID));
          setSelectedJob(null);
          setShowDeleteModal(false);
        } else {
          console.error("Error deleting job:", response.data.error);
        }
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    }
  };

  const handleDeleteCancel = () => {
    setSelectedJobID(null);
    setShowDeleteModal(false);
  };

  const handleEditJobClick = (jobId) => {
    console.log("Job in handleEditJobClick:", jobs);
    console.log("job", jobId);
    const job = jobs.find((job) => job.ID === jobId);
    if (job) {
      setSelectedJob(job);
      setShowEditModal(true);
    } else {
      console.error("Job not found for editing.");
    }
  };

  const handleJobEdit = async (updatedJob) => {
    console.log("selectedJob:", selectedJob);
    console.log("updatedJob:", updatedJob);
    try {
      if (selectedJob && updatedJob && selectedJob.ID !== undefined) {
        console.log("Updating job:", updatedJob);
        const response = await axios.put(
          `http://localhost:7000/jobs/${selectedJob.ID}`,
          updatedJob
        );
        console.log("Response from server:", response);
        if (response.status === 200) {
          setJobs(
            jobs.map((job) => (job.ID === selectedJob.ID ? updatedJob : job))
          );
          setUpdatedJob(updatedJob);
          setShowEditModal(false);
        } else {
          console.error("Error editing job:", response.data.error);
        }
      } else {
        console.error("Invalid selected job or job ID.");
      }
    } catch (error) {
      console.error("Error editing job:", error);
    }
  };

  const handleEditCancel = () => {
    setSelectedJob(null);
    setShowEditModal(false);
  };

  return (
    <div className="heading">
      <h1>Job Posting</h1>
      <div>
        <button className="add-job-button" onClick={handleAddJobClick}>
          Add Job
        </button>
      </div>
      {showForm && (
        <JobForm onSubmit={handleJobSubmit} onCancel={handleJobCancel} />
      )}
      {showDeleteModal && (
        <DeleteConfirmationModal
          onConfirm={handleJobDelete}
          onCancel={handleDeleteCancel}
        />
      )}
      {showEditModal && (
        <EditModal
          job={selectedJob}
          onUpdate={(jobData) => setUpdatedJob(jobData)}
          onConfirm={handleJobEdit}
          onCancel={handleEditCancel}
        />
      )}
      {jobs.length > 0 ? (
        (console.log("Jobs:", jobs),
        (
          <JobList
            jobs={jobs}
            onJobClick={() => {}}
            onDeleteJobClick={handleDeleteJobClick}
            onEditJobClick={handleEditJobClick}
          />
        ))
      ) : (
        <h2>No jobs posted yet</h2>
      )}
    </div>
  );
};

export default Jobs;
