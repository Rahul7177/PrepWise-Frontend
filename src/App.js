import './App.css';
import Homepage from './pages/homepage';
import Courses from './pages/Courses';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
