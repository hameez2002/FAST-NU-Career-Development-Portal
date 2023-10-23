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
  const [selectedJobID, setSelectedJobID] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

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
  
  // const handleJobSubmit = async (formData) => {
  //   const newJob = {
  //     id: Date.now(),
  //     ...formData,
  //   };

  //   try {
  //     await axios.post("http://localhost:7000/jobs", newJob);
  //   } catch (error) {
  //     console.error("Error adding new job:", error);
  //     return;
  //   }

  //   setShowForm(false);

  //   try {
  //     const response = await axios.get("http://localhost:7000/jobs");
  //     setJobs(response.data);
  //   } catch (error) {
  //     console.error("Error fetching updated job list:", error);
  //   }
  // };

  const handleJobSubmit = async (formData) => {
    await axios.post("http://localhost:7000/jobs", formData);

    const response = await axios.get("http://localhost:7000/jobs");

    setJobs(response.data);

    setShowForm(false);
  };

  const handleJobCancel = () => {
    setShowForm(false);
  };

  const handleDeleteJobClick = (jobId) => {
    setSelectedJobID(jobId);
    setShowDeleteModal(true);
  };

  const handleJobDelete = () => {
    setJobs(jobs.filter((job) => job.id !== selectedJobID));
    setSelectedJobID(null);
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setSelectedJobID(null);
    setShowDeleteModal(false);
  };

  const handleEditJobClick = (jobId) => {
    const job = jobs.find((job) => job.id === jobId);
    setSelectedJob(job);
    setShowEditModal(true);
  };

  const handleJobEdit = (formData) => {
    const updatedJob = {
      ...selectedJob,
      ...formData,
    };
    setJobs(jobs.map((job) => (job.id === selectedJob.id ? updatedJob : job)));
    setSelectedJob(null);
    setShowEditModal(false);
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
          onConfirm={handleJobEdit}
          onCancel={handleEditCancel}
        />
      )}
      {jobs.length > 0 ? (
        <JobList
          jobs={jobs}
          onJobClick={() => {}}
          onDeleteJobClick={handleDeleteJobClick}
          onEditJobClick={handleEditJobClick}
        />
      ) : (
        <h2>No jobs posted yet</h2>
      )}
    </div>
  );
};

export default Jobs;
