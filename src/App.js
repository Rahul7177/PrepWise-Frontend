import './App.css';
import Homepage from './pages/homepage';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="/course/:courseName" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
