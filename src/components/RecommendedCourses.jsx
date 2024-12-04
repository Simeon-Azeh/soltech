import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedCourses = ({ recommended, ongoing }) => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-white">Recommended Courses</h2>
        <div className="mt-4 space-y-4">
          {recommended.map((course, index) => (
            <div key={index} className="p-4 bg-[#1f1f1f] rounded-lg shadow-md">
              <h3 className="font-medium text-white text-md">{course.title}</h3>
              <p className="text-sm text-gray-300">{course.description}</p>
              <Link to={`/tech-courses/${course.id}`} className="text-blue-500 hover:underline">More Details</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 bg-[#282828] rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-white">Ongoing Courses</h2>
        <div className="mt-4 space-y-4">
          {ongoing.map((course, index) => (
            <div key={index} className="p-4 bg-[#1f1f1f] rounded-lg shadow-md">
              <h3 className="font-medium text-white text-md">{course.title}</h3>
              <p className="text-sm text-gray-300">{course.description}</p>
              <Link to={`/tech-courses/${course.id}`} className="text-blue-500 hover:underline">More Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourses;