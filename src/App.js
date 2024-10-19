import './App.css';
import Homepage from './pages/homepage';
import Courses from './pages/Courses';
import ForumHome from './pages/Forum'; // Import ForumHome
import SubjectForum from './pages/SubjectForum'; // Import SubjectForum
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chatbot from './components/chatbot'; // Import the button component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Chatbot /> {/* The "Create Discussion" button */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/forum' element={<ForumHome />} /> {/* Forum homepage to select subjects */}
          <Route path='/forum/:subject' element={<SubjectForum />} /> {/* Subject-specific discussion page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
