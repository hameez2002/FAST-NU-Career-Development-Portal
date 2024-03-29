import React from "react";
import Card from "../Card";

export const BoardOfDirectors = () => {
  //content here needs to be statically insterted
  const directors = [
    { name: "Aysha Siddiqui", designation: "Career Services Officer", campus: "Karachi" },
  ];

  return (
    <div>
      <h1 className="text-gray-800 text-3xl font-bold mb-6 text-center">
        Career Services Office
      </h1>
      <div className="flex flex-wrap justify-center">
        {directors.map((director, index) => (
          <Card
            key={index}
            name={director.name}
            designation={director.designation}
            campus={director.campus}
          />
        ))}
      </div>
    </div>
  );
};