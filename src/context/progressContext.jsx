import React, { createContext, useState, useContext } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [progressData, setProgressData] = useState({});
    const [timeSpentData, setTimeSpentData] = useState({});

    const getModuleProgress = (courseId, moduleId) => {
        return progressData[courseId]?.[moduleId] || 0;  
    };

    
    const getModuleTimeSpent = (courseId, moduleId) => {
        return timeSpentData[courseId]?.[moduleId] || 0; 
    };

    
    const contextValue = {
        getModuleProgress,
        getModuleTimeSpent,
        setProgressData,  
        setTimeSpentData  
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
