// frontend/GraduateDirectory.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GraduateDirectory = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:7000/profile");
        console.log("Response data:", response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setProfiles(response.data);
        } else {
          console.error("Invalid data format received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  console.log("Profiles:", profiles); // Add this line to inspect the profiles variable

  return (
    <div className="flex flex-wrap justify-center">
      {Array.isArray(profiles) ? (
        profiles.map((profile) => (
          <Link to={`/profile/${profile.user_id}`} key={profile.user_id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-full"
                src={profile.student_profile_pic || "https://via.placeholder.com/300"}
                alt={`${profile.fname} ${profile.lname}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {profile.fname} {profile.lname}
                </div>
                <p className="text-gray-700 text-base">
                  Roll No: {profile.user_id}<br />
                  Discipline: {profile.discipline}<br />
                  Year of Graduation: {profile.year_of_graduation}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No profiles found</p>
      )}
    </div>
  );
};

export default GraduateDirectory;
