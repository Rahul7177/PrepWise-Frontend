import React from 'react';
import '../stylesheets/Courses.css'
import CourseCard from '../components/CourseCard';
import cImage from '../assets/C++.png'; 
import dsaImage from '../assets/DSA.png'; 
import calculusImage from '../assets/Calculus.webp'; 
import dbmsImage from '../assets/dbms.webp'; 
import cnImage from '../assets/computer_networks.webp'; 
import cryptoImage from '../assets/cryptography.webp'; 
import Navbar from '../components/Navbar';
import Chatbot from '../components/chatbot';

const courses = [
  { id: 1, name: 'C++ Programming', image: cImage },
  { id: 2, name: 'Data Structures and Algorithms', image: dsaImage },
  { id: 3, name: 'Calculus', image: calculusImage },
  { id: 4, name: 'DBMS', image: dbmsImage},
  { id: 5, name: 'Computer Networks', image: cnImage },
  { id: 6, name: 'Cryptography', image: cryptoImage },

];

const Courses = () => {
  return (
    <>
    <Navbar/>
    <Chatbot/>
    <div className="courses-page">
      <h1>My Courses</h1>
      <div className="courses-container">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            name={course.name} 
            image={course.image} 
          />
        ))}
      </div>
      <div className='add_course'>
        <p>
          <h1>Course not listed here? </h1>
          <div>You can add your own courses and can configure them based upon your requirements, and get a personalized learning experience.
          </div>
        </p>
        <button>Add Course</button>
      </div>
    </div>
    </>
  );
};

export default Courses;
