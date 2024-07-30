import React from "react";

const MemeCard = () => {
  return (
    <div className="relative max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 text-center">
        <div className="bg-gray-200 rounded-lg p-6 mb-4">
          <p className="text-2xl font-bold mb-2">
            When you finish your work early
          </p>
          <p className="text-lg text-gray-600">
            And you realize it's just the beginning of the weekend!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;
