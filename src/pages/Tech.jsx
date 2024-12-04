import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Header';
import TechEvents from '../components/TechEvents';
import RecommendedCourses from '../components/RecommendedCourses';

const TechPage = () => {
  const enrolledEvents = [
    { id: 1, title: 'AI Workshop', description: 'Learn the basics of AI and machine learning.' },
    { id: 2, title: 'Cybersecurity Bootcamp', description: 'An intensive course on cybersecurity practices.' },
  ];

  const enrolledCourses = [
    { id: 1, title: 'Full Stack Development', description: 'Become a full stack developer with this comprehensive course.' },
    { id: 2, title: 'Data Science', description: 'Learn data science from scratch.' },
  ];

  const recommendedCourses = [
    { id: 1, title: 'Cloud Computing', description: 'Understand the fundamentals of cloud computing.' },
    { id: 2, title: 'Blockchain Technology', description: 'Dive into the world of blockchain and cryptocurrencies.' },
  ];

  const ongoingCourses = [
    { id: 1, title: 'DevOps', description: 'Master DevOps practices and tools.' },
    { id: 2, title: 'Mobile App Development', description: 'Learn to build mobile applications.' },
  ];

  return (
    <div className="flex bg-[#141414]">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div className="mt-[70px]">
          <Navbar />
        </div>
        <main className="p-6 pt-2">
          <TechEvents events={enrolledEvents} courses={enrolledCourses} />
          <RecommendedCourses recommended={recommendedCourses} ongoing={ongoingCourses} />
        </main>
      </div>
    </div>
  );
};

export default TechPage;