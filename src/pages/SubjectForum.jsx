import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SubjectForum = () => {
  const { subject } = useParams();
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState('');

  const handleCreateThread = () => {
    if (newThread.trim() !== '') {
      setThreads([...threads, { id: threads.length + 1, title: newThread }]);
      setNewThread('');
    }
  };

  return (
    <div className="subject-forum">
      <h1>{subject.replace('-', ' ')} Forum</h1>

      <div className="new-thread">
        <input
          type="text"
          value={newThread}
          onChange={(e) => setNewThread(e.target.value)}
          placeholder={`Start a discussion in ${subject.replace('-', ' ')}`}
        />
        <button onClick={handleCreateThread}>Create Thread</button>
      </div>

      <div className="threads-list">
        <h2>Threads</h2>
        {threads.length > 0 ? (
          threads.map((thread) => (
            <div key={thread.id} className="thread-item">
              {thread.title}
            </div>
          ))
        ) : (
          <p>No discussions yet. Start the conversation!</p>
        )}
      </div>
    </div>
  );
};

export default SubjectForum;
