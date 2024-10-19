import React from 'react';
import { Link } from 'react-router-dom';

const ForumHome = () => {
  const subjects = ['C++ Programming', 'Data Structures', 'Calculus', 'DBMS', 'Computer Networks', 'Cryptography'];

  return (
    <div className="forum-home">
      <h1>Select a Subject to Discuss</h1>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            <Link to={`/forum/${subject.toLowerCase().replace(/\s+/g, '-')}`}>{subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumHome;
