import React, { useEffect, useState } from 'react';
import './light.css';
import gm from './gm.m4a';

export const Light = () => {
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const updatePosition = (e) => {
      document.documentElement.style.setProperty('--x', e.clientX + 'px');
      document.documentElement.style.setProperty('--y', e.clientY + 'px');
    };

    document.documentElement.addEventListener('mousemove', updatePosition);

    return () => {
      document.documentElement.removeEventListener('mousemove', updatePosition);
    };
  }, []); 

  const play = () => {
    if (!audioPlayed) {
      const newAudio = new Audio(gm);
      setAudio(newAudio);

      newAudio.addEventListener('ended', () => {
        setAudioPlaying(false);
      });

      newAudio.play();
      setAudioPlayed(true);
      setAudioPlaying(true);
    } else if (audio && audioPlaying) {
      audio.pause();
      setAudioPlaying(false);
    } else if (audio && !audioPlaying) {
      audio.play();
      setAudioPlaying(true);
    }
  };

  const stop = () => {
    if (audioPlayed && audioPlaying) {
      audio.pause();
      setAudioPlayed(false);
      setAudioPlaying(false);
    }
  };
  
  return (
    <div className="Light" onClick={play} onDoubleClick={stop}>
      <h2>Don't Click</h2>
      <div className="light-color"></div>
    </div>
  );
};
