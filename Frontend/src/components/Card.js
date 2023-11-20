import React from "react";

const Card = ({ name, department, campus }) => {
  return (
    <div className="bg-[#f3f1ec] rounded-lg shadow-lg overflow-hidden w-64 text-center m-4">
      <div className="relative mx-auto p-6 pb-4">
        <img
          className="rounded-full h-32 w-32 object-cover mx-auto"
          src="https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_1280.png"
          alt="Profile"
        />
      </div>
      <div className="px-4 py-5 text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-800">
          {name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-600">Department: {department}</p>
        <p className="mt-1 max-w-2xl text-sm text-gray-600">Campus: {campus}</p>
      </div>
    </div>
  );
};

export default Card;
