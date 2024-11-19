import React, { createContext, useState, useContext } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [progressData, setProgressData] = useState({});
    const [timeSpentData, setTimeSpentData] = useState({});

    // Function to get progress for a specific module
    const getModuleProgress = (courseId, moduleId) => {
        return progressData[courseId]?.[moduleId] || 0;  // Default to 0 if no progress found
    };

    // Function to get time spent for a specific module
    const getModuleTimeSpent = (courseId, moduleId) => {
        return timeSpentData[courseId]?.[moduleId] || 0;  // Default to 0 if no time found
    };

    // Context value to provide to components
    const contextValue = {
        getModuleProgress,
        getModuleTimeSpent,
        setProgressData,  // To allow updates to progressData
        setTimeSpentData  // To allow updates to timeSpentData
    };

    return (
        <ProgressContext.Provider value={contextValue}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgressContext = () => {
    return useContext(ProgressContext);
};

export default ProgressContext;
