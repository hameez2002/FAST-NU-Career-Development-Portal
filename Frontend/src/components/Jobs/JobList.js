// import React from "react";
// import "./JobList.css";

// const JobList = ({ jobs, onJobClick, onDeleteJobClick, onEditJobClick }) => {
//   const formatDate = (dateString) => {
//     if (!dateString) {
//       return "Invalid Date";
//     }

//     const date = new Date(dateString);

//     if (isNaN(date)) {
//       return "Invalid Date";
//     }

//     const year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let day = date.getDate();

//     if (month < 10) {
//       month = '0' + month;
//     }
//     if (day < 10) {
//       day = '0' + day;
//     }

//     return `${year}-${month}-${day}`;
//   };

//   return (
//     <ul className=" bg-[#f3f1ec] job-list">
//       {jobs.map((job) => (
//         <li key={job.ID}>
//           <h2 className="job-title">{job.Title}</h2>
//           <p className="job-type">{job.Type}</p>
//           <p className="job-description">{job.Description}</p>
//           <p className="job-link">
//             Click Here to Apply: <a href={job.Link}>{job.Link}</a>
//           </p>
//           <p className="job-deadline">
//             Deadline: {formatDate(job.deadlineDate)}
//           </p>
//           <button className="delete-job" onClick={() => onDeleteJobClick(job)}>
//             Delete
//           </button>
//           <button className="edit-job" onClick={() => onEditJobClick(job.ID)}>
//             Edit
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default JobList;

import React from "react";

const JobList = ({ jobs, onJobClick, onDeleteJobClick, onEditJobClick }) => {
  const formatDate = (dateString) => {
    if (!dateString) {
      return "Invalid Date";
    }

    const date = new Date(dateString);

    if (isNaN(date)) {
      return "Invalid Date";
    }

    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <ul className="bg-[#f3f1ec] job-list p-0 w-5/6 mx-auto my-10">
      {jobs.map((job) => (
        <li key={job.ID} className="bg-[#f3f1ec] rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-2xl font-bold mb-2">{job.Title}</h2>
          <p className="font-bold">{job.Type}</p>
          <p className="mb-4">{job.Description}</p>
          <p className="mb-2">
            Click Here to Apply:{" "}
            <a href={job.Link} className="text-blue-500">
              {job.Link}
            </a>
          </p>
          <p className="italic mb-2">
            Deadline: {formatDate(job.deadlineDate)}
          </p>
          <button
            className="bg-gray-200 text-black border-none rounded-md px-4 py-2 mr-2"
            onClick={() => onDeleteJobClick(job)}
          >
            Delete
          </button>
          <button
            className="bg-gray-200 text-black border-none rounded-md px-4 py-2"
            onClick={() => onEditJobClick(job.ID)}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
