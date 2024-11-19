import React, { useEffect, useState, useContext } from 'react';
import ProgressContext from './ProgressContext';

const TopicTracker = ({ courseId, moduleId, topic }) => {
    const { markTopicAsRead } = useContext(ProgressContext);
    const [isVisible, setIsVisible] = useState(false);
    const [timeSpent, setTimeSpent] = useState(0);
    const [hasRead, setHasRead] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(`topic-${topic.id}`);
            const rect = element.getBoundingClientRect();
            const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (fullyVisible) setIsVisible(true);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible && !hasRead) {
            const timer = setInterval(() => setTimeSpent((time) => time + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [isVisible, hasRead]);

    useEffect(() => {
        if (timeSpent >= 60 && isVisible && !hasRead) {
            setHasRead(true);
            markTopicAsRead(courseId, moduleId, topic.id);
        }
    }, [timeSpent, isVisible, hasRead, markTopicAsRead, courseId, moduleId, topic.id]);

    return (
        <div id={`topic-${topic.id}`} className={`topic ${hasRead ? 'read' : ''}`}>
            {topic.content}
        </div>
    );
};

export default TopicTracker;
