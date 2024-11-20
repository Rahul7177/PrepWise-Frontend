import React, { useEffect, useState } from 'react';
import { firestoreDb } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from '../components/Navbar'
import '../stylesheets/MyProgress.css';

const MyProgress = () => {
    const { currentUser } = useAuth();
    const [progressData, setProgressData] = useState([]);
    const [openCourses, setOpenCourses] = useState({}); // State to track opened courses

    useEffect(() => {
        const fetchProgress = async () => {
            if (!currentUser) return;

            const progressRef = collection(firestoreDb, `users/${currentUser.uid}/progress`);
            const progressSnap = await getDocs(progressRef);
            const data = progressSnap.docs.map(doc => ({
                courseName: doc.id,
                ...doc.data(),
            }));
            setProgressData(data);
        };

        fetchProgress();
    }, [currentUser]);

    const toggleCourse = (courseName) => {
        setOpenCourses((prev) => ({
            ...prev,
            [courseName]: !prev[courseName],
        }));
    };

    return (
        <>
        <Navbar/>
        <div className="progress-container">
            <h2>My Progress</h2>
            {progressData.length > 0 ? (
                <div className="progress-list">
                    {progressData.map((course) => (
                        <div key={course.courseName} className="progress-course-card">
                            <h3
                                className="progress-course-title"
                                onClick={() => toggleCourse(course.courseName)}
                            >
                                {course.courseName}
                            </h3>
                            {openCourses[course.courseName] && (
                                <div className="course-modules">
                                    {Object.entries(course.progress || {}).map(([module, progress]) => (
                                        <div key={module} className="module-progress">
                                            <p><strong>Module:</strong> {module}</p>
                                            <div className="progress-bar-container">
                                                <div
                                                    className="progress-bar"
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                            <p><strong>Progress:</strong> {progress}%</p>
                                            <p className="time-spent">
                                                <strong>Time Spent:</strong>{' '}
                                                {Math.floor((course.timeSpent[module] || 0) / 60)} min
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No progress data found.</p>
            )}
        </div>
        </>
    );
};

export default MyProgress;
