import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GraduateDirectory = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:7000/profile");
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

  return (
    <div className="flex flex-wrap justify-center p-4">
      {Array.isArray(profiles)? (
        profiles.map((profile) => (
          <Link to={`/profile/${profile.user_id}`} key={profile.user_id} className="block">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <img
                className="w-full h-48 object-cover"
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
              {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  New
                </span>
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Active
                </span>
              </div> */}
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center text-gray-500">No profiles found</p>
      )}
    </div>
  );
};

export default GraduateDirectory;
