// import React, { useState, useEffect } from "react";

// const EditModal = ({ job, onConfirm, onCancel }) => {
//   const [formData, setFormData] = useState({
//     jobTitle: job.jobTitle || "",
//     jobType: job.jobType || "On-site",
//     jobDescription: job.jobDescription || "",
//     jobLink: job.jobLink || "",
//     deadlineDate: job.deadlineDate || "",
//   });

//   useEffect(() => {
//     console.log("Job prop in useEffect:", job);
//     setFormData({
//       jobTitle: job?.jobTitle || "",
//       jobType: job?.jobType || "On-site",
//       jobDescription: job?.jobDescription || "",
//       jobLink: job?.jobLink || "",
//       deadlineDate: job?.deadlineDate || "",
//     });
//   }, [job]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onConfirm(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-md shadow-lg w-1/2">
//         <div className="flex justify-between items-center">
//           <h2 className="block mx-auto text-2xl font-medium text-gray-800">
//             Edit Job
//           </h2>
//           <button
//             onClick={onCancel}
//             className="w-10 bg-red-500 text-white hover:bg-red-600"
//           >
//             X
//           </button>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-5">
//           <div className="space-y-5">
//             <div>
//               <label
//                 htmlFor="jobTitle"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Job Title:
//               </label>
//               <input
//                 type="text"
//                 id="jobTitle"
//                 name="jobTitle"
//                 value={formData.jobTitle}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="jobType"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Job Type:
//               </label>
//               <select
//                 id="jobType"
//                 name="jobType"
//                 value={formData.jobType}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="Onsite">Onsite</option>
//                 <option value="Remote">Remote</option>
//                 <option value="Hybrid">Hybrid</option>
//                 <option value="Internship">Internship</option>
//               </select>
//             </div>
//             <div>
//               <label
//                 htmlFor="jobDescription"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Job Description:
//               </label>
//               <textarea
//                 id="jobDescription"
//                 name="jobDescription"
//                 value={formData.jobDescription}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="jobLink"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Job Link:
//               </label>
//               <input
//                 type="text"
//                 id="jobLink"
//                 name="jobLink"
//                 value={formData.jobLink}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="deadlineDate"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Deadline Date:
//               </label>
//               <input
//                 type="date"
//                 id="deadlineDate"
//                 name="deadlineDate"
//                 value={formData.deadlineDate}
//                 onChange={handleInputChange}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>
//           <div className="mt-5 flex justify-center space-x-3">
//             <button
//               type="button"
//               onClick={onCancel}
//               className="w-16 py-2 px-4 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="w-16 py-2 px-4 bg-blue-500 text-white rounded-md flex items-center justify-center hover:bg-blue-600"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditModal;


import React, { useState, useEffect } from "react";

const EditModal = ({ job, onConfirm, onCancel }) => {
  const [formData, setFormData] = useState({
    jobTitle: job.Title || "",
    jobType: job.Type || "On-site",
    jobDescription: job.Description || "",
    jobLink: job.Link || "",
    deadlineDate: job.Deadline || "",
  });

  useEffect(() => {
    setFormData({
      jobTitle: job.Title || "",
      jobType: job.Type || "On-site",
      jobDescription: job.Description || "",
      jobLink: job.Link || "",
      deadlineDate: job.Deadline || "",
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
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-1/2">
        <div className="flex justify-between items-center">
          <h2 className="block mx-auto text-2xl font-medium text-gray-800">
            Edit Job
          </h2>
          <button
            onClick={onCancel}
            className="w-10 bg-red-500 text-white hover:bg-red-600"
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
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
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
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
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="On-site">On-site</option>
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
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
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
                id="jobLink"
                name="jobLink"
                value={formData.jobLink}
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
                id="deadlineDate"
                name="deadlineDate"
                value={formData.deadlineDate}
                onChange={handleInputChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-5 flex justify-center space-x-3">
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
