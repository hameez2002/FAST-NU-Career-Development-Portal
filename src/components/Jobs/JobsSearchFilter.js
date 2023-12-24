// import React from "react";
// import "./JobsSearchFilter.css";

// const JobSearchFilter = ({ searchQuery, handleSearch, setSearchQuery }) => {
//   return (
//     <div className="card home-jobs-filters">
//       <div className="home-jobs-filters-wrapper">
//         <div className="home-jobs-filter-search">
//           <input
//             type="search"
//             className="input home-jobs-filter-search-input"
//             placeholder="Search for jobs"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button
//             className="button-primary small home-jobs-filter-search-button"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSearchFilter;


import React, { useState } from 'react';

function JobSearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(searchTerm);
  };

  return (
    <div className="flex items-center justify-center mb-4 w-1/2 ml-2">
      <div className="flex items-center w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter job title"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default JobSearchFilter;
