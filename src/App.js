import './App.css';
import Homepage from './pages/homepage';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import ProgressPage from './pages/Progress';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/progressContext';

// Course images
import cImage from '../src/assets/C++.png'; 
import dsaImage from '../src/assets/DSA.png'; 
import calculusImage from '../src/assets/Calculus.webp'; 
import dbmsImage from '../src/assets/dbms.webp'; 
import cnImage from '../src/assets/computer_networks.webp'; 
import cryptoImage from '../src/assets/cryptography.webp'; 

import cryptographyModules from './courseData/Cryptography';
import dataStructuresModules from './courseData/DataStructures';
import calculusModules from './courseData/Calculus';
import dbmsModules from './courseData/DBMS';
import computerNetworksModules from './courseData/ComputerNetworks';
import cppProgrammingModules from './courseData/CppProgramming';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyAccount from './pages/Account';
import MyProgress from './pages/MyProgress';
import Forum from './pages/Forum';

// Course data
const courses = [
  { id: 1, name: 'cryptography', image: cryptoImage, modules: cryptographyModules },
  { id: 2, name: 'data structures and algorithms', image: dsaImage, modules:dataStructuresModules },
  { id: 3, name: 'calculus', image: calculusImage, modules:calculusModules },
  { id: 4, name: 'dbms', image: dbmsImage, modules:dbmsModules },
  { id: 5, name: 'computer networks', image: cnImage, modules:computerNetworksModules },
  { id: 6, name: 'c++ programming', image: cImage, modules:cppProgrammingModules }
];

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path="/course/:courseName" element={<CourseDetail />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/account' element={<MyAccount/>} />
          <Route path='/progress' element={<MyProgress/>} />
          <Route path='/forum' element={<Forum/>} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
