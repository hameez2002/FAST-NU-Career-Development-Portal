import React from "react";

const JobList = ({ jobs, onJobClick, onDeleteJobClick, onEditJobClick }) => {
  const formatDate = (dateString) => {
    if (!dateString) {
      return "Invalid Date";
    }

    const date = new Date(dateString);
    //const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

    if (isNaN(date)) {
      console.log("Invalid date string:", dateString);
      return "Invalid Date";
    }

    const formattedDate = date.toISOString().split("T")[0]; // Extract the date part
    return formattedDate;

    // const year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let day = date.getDate();

    // if (month < 10) {
    //   month = "0" + month;
    // }
    // if (day < 10) {
    //   day = "0" + day;
    // }

    // return ${year}-${month}-${day};
  };

  const handleJobLinkClick = (event, link) => {
    event.preventDefault();

    if (!link.startsWith("http://") && !link.startsWith("https://")) {
      link = "http://" + link;
    }

    window.open(link, "_blank");
  };

  return (
    <ul className="bg-[#f3f1ec] job-list p-0 w-1/2 mx-auto my-10 mb-10">
      {jobs.map((job) => (
        <li
          key={job.ID}
          className="bg-[#f3f1ec] rounded-lg shadow-md p-4 !mt-6 mb-6"
        >
          <h2 className="text-2xl font-bold mb-2">{job.Title}</h2>
          <p className="font-bold">{job.Type}</p>
          <div className="mb-4 whitespace-pre-wrap">{job.Description}</div>
          <p className="mb-2">
            Click Here to Apply:{" "}
            <a
              href={job.Link}
              className="text-blue-500"
              onClick={(e) => handleJobLinkClick(e, job.Link)}
            >
              {job.Link}
            </a>
          </p>
          <p className="italic mb-2">Deadline: {formatDate(job.Deadline)}</p>
          <div className="flex items-center justify-center mt-4">
            <button
              className="w-20 h-10 bg-red-500 text-black border-none rounded-md px-2 py-1 mr-2"
              onClick={() => onDeleteJobClick(job)}
            >
              Delete
            </button>
            <button
              className="w-20 h-10 bg-blue-500 text-black border-none rounded-md px-2 py-1 mr-2"
              onClick={() => onEditJobClick(job.ID)}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
