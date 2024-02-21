import React, { useState, useEffect } from "react";

const EditModal = ({ job, onConfirm, onCancel }) => {
  console.log("edit clicked");
  const [formData, setFormData] = useState({
    jobTitle: job.title || "",
    jobType: job.job_type || "",
    jobDescription: job.job_description || "",
    jobLink: job.link || "",
    deadlineDate: job.Deadline || "",
    noOfOpenings: job.no_of_openings || "",
    qualificationRequirements: job.qualifications_req || "",
    responsibilities: job.responsibilities || "",
    about: job.about || "",
    jobStatus: job.job_status || "",
    postedOn: job.posted_on || "",
    updatedOn: job.updated_on || "",
  });

  useEffect(() => {
    console.log("Job prop in useEffect:", job);
    setFormData({
      jobTitle: job?.title || "",
      jobType: job?.job_type || "",
      jobDescription: job?.job_description || "",
      jobLink: job?.link || "",
      deadlineDate: job?.Deadline || "",
      noOfOpenings: job?.no_of_openings || "",
    qualificationRequirements: job?.qualifications_req || "",
    responsibilities: job?.responsibilities || "",
    about: job?.about || "",
    jobStatus: job?.job_status || "",
    postedOn: job?.posted_on || "",
    updatedOn: job?.updated_on || "",
    });
  }, [job]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onConfirm(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-gray-600 bg-opacity-50">
    <div className="bg-white rounded-md shadow-lg max-w-3xl w-full max-h-full overflow-auto">
      <div className="p-6">
        <div className="flex justify-between items-center"></div>
          <h2 className="text-2xl font-medium text-gray-800">Edit Job</h2>
          <div className="right-0">
          <button
            onClick={onCancel}
            className="right-0 w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            X
          </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 space-y-5">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title:
              </label>
              <input
                type="text"
                id="title"
                name="jobTitle"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-gray-700"
              >
                Job Type:
              </label>
              <select
                id="job_type"
                name="jobType"
                value={formData.job_type}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="jobDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Job Description:
              </label>
              <textarea
                id="job_description"
                name="jobDescription"
                value={formData.job_description}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="jobLink"
                className="block text-sm font-medium text-gray-700"
              >
                Job Link:
              </label>
              <input
                type="text"
                id="link"
                name="jobLink"
                value={formData.link}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="deadlineDate"
                className="block text-sm font-medium text-gray-700"
              >
                Deadline Date:
              </label>
              <input
                type="date"
                id="Deadline"
                name="deadlineDate"
                value={formData.Deadline}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="noOfOpenings"
                className="block text-sm font-medium text-gray-700"
              >
                No. of Openings:
              </label>
              <input
                type="number"
                id="no_of_openings"
                name="noOfOpenings"
                value={formData.no_of_openings}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="qualificationRequirements"
                className="block text-sm font-medium text-gray-700"
              >
                Qualification Requirements:
              </label>
              <textarea
                type="text"
                id="qualifications_req"
                name="qualificationRequirements"
                value={formData.qualifications_req}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="responsibilities"
                className="block text-sm font-medium text-gray-700"
              >
                Responsibilities:
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About:
              </label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="jobStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Job Status:
              </label>
              <input
                type="text"
                id="job_status"
                name="jobStatus"
                value={formData.job_status}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="postedOn"
                className="block text-sm font-medium text-gray-700"
              >
                Posted On:
              </label>
              <input
                type="date"
                id="posted_on"
                name="postedOn"
                value={formData.posted_on}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="updatedOn"
                className="block text-sm font-medium text-gray-700"
              >
                Updated On:
              </label>
              <input
                type="date"
                id="updated_on"
                name="updatedOn"
                value={formData.updated_on}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex justify-center space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="w-16 py-2 px-4 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-16 py-2 px-4 bg-blue-500 text-white rounded-md flex items-center justify-center hover:bg-blue-600"
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
