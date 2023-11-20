import React, { useState } from "react";
import "./JobsSearchFilter.css";

const JobSearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement the search functionality here
    // You can use the 'searchQuery' state to filter job listings
    // and display the filtered results
    // For this example, we'll just log the searchQuery
    console.log("Search query: ", searchQuery);
  };

  return (
    <div className="card home-jobs-filters">
      <div className="home-jobs-filters-wrapper">
        <div className="home-jobs-filter-search">
          <input
            type="search"
            className="input home-jobs-filter-search-input"
            placeholder="Search for jobs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="button-primary small home-jobs-filter-search-button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchFilter;
