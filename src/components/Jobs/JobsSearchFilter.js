import React from "react";
import "./JobsSearchFilter.css";

const JobSearchFilter = ({ searchQuery, handleSearch, setSearchQuery }) => {
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
