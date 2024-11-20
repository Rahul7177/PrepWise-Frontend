import React, { useContext, useState } from 'react';
import ProgressContext from '../context/progressContext';
import '../stylesheets/Progress.css';

const ProgressPage = ({ courses }) => {
  const { getModuleProgress, getModuleTimeSpent } = useContext(ProgressContext);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="progress-page">
      <h1>My Progress</h1>
      <div className="tiles">
        {selectedCourse ? (
          <div className="module-progress">
            <h2>{selectedCourse.name}</h2>
            <img src={selectedCourse.image} alt={selectedCourse.name} className="course-image" />
            {selectedCourse.modules && selectedCourse.modules.length > 0 ? (
              selectedCourse.modules.map((module) => {
                const progress = getModuleProgress(selectedCourse.id, module.id) || 0; // Default to 0 if no progress
                const timeSpent = getModuleTimeSpent(selectedCourse.id, module.id) || 0; // Default to 0 if no time spent
                return (
                  <div key={module.id} className="module-card">
                    <h3>{module.title}</h3>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{
                          width: `${progress}%`,
                        }}
                      >
                        {progress.toFixed(2)}%
                      </div>
                    </div>
                    <p>Time Spent: {timeSpent} seconds</p>
                  </div>
                );
              })
            ) : (
              <p>No modules available for this course.</p>
            )}
            <button onClick={() => setSelectedCourse(null)}>Back to Courses</button>
          </div>
        ) : (
          <div className="progress-course-card-container">
            {courses.map((course) => (
              <div key={course.id} className="progress-course-card" onClick={() => handleCourseClick(course)}>
                <img src={course.image} alt={course.name} className="progress-course-image" />
                <h2>{course.name}</h2>
                <p>View Progress</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
