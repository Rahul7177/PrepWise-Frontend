import React, { useState, useRef, useEffect } from 'react';
import '../stylesheets/MusicPlayer.css';
import Song1 from '../assets/music/Chime.mp3';
import Song2 from '../assets/music/Springs.mp3';
import Song3 from '../assets/music/Yanvince.mp3';

const songs = [
    { title: 'Chime', artist: 'Win and Loose [NCS Release]', audioSrc: Song1 },
    { title: 'Springs', artist: 'Magnetic [NCS Release]', audioSrc: Song2 },
    { title: 'Yanvince', artist: 'Who am I [NCS Release]', audioSrc: Song3 },
];

const MusicPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50); 
    const [currentSongIndex, setCurrentSongIndex] = useState(0); 
    const [currentTime, setCurrentTime] = useState(0); 
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(new Audio(songs[currentSongIndex].audioSrc));

    
    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(songs[currentSongIndex].audioSrc);
        audioRef.current.volume = volume / 100; // Set volume when song changes
        audioRef.current.addEventListener('timeupdate', updateCurrentTime);
        audioRef.current.addEventListener('loadedmetadata', updateDuration);
    
        if (isPlaying) {
            audioRef.current.play(); // Auto-play the new song if isPlaying is true
        }
    
        return () => {
            audioRef.current.pause();
            audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
            audioRef.current.removeEventListener('loadedmetadata', updateDuration);
        };
    }, [currentSongIndex, isPlaying, volume]);
    
    const updateCurrentTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const updateDuration = () => {
        setDuration(audioRef.current.duration);
    };

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume / 100; 
    };

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        setIsPlaying(true); 
    };

    const handlePrev = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
        setIsPlaying(true); 
    };

    const handleSeek = (e) => {
        const seekTime = e.target.value;
        audioRef.current.currentTime = seekTime; 
        setCurrentTime(seekTime);
    };

    return (
        <>
            <div className="music-player-icon" onClick={toggleDialog}>
                🎧
            </div>
            {isOpen && (
                <div className="music-player-dialog">
                    <div className="dialog-header">
                        <h3>Now Playing</h3>
                        <button onClick={toggleDialog}>X</button>
                    </div>
                    <div className="song-info">
                        <p>Song Title: {songs[currentSongIndex].title}</p>
                        <p>Artist: {songs[currentSongIndex].artist}</p>
                    </div>
                    <div className="controls">
                        <button onClick={handlePrev}>Prev</button>
                        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                    <div className="volume-control">
                        <label htmlFor="volume">Volume:</label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                    <div className="seekbar">
                        <label htmlFor="seek">Seek:</label>
                        <input
                            id="seek"
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                        />
                        <div>
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

export default MusicPlayer;
