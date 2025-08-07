// src/App.js
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Memories from './components/Memories';
import audioFile from './assets/v1-gq4jjehf-ifgqhbkv_Z8OVY1Or.mp3';

function AppWrapper() {
  const audioRef = useRef(null);
  const location = useLocation();
  const [shouldPause, setShouldPause] = useState(false);

  // Auto play and loop background audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!shouldPause && audio) {
      audio.play().catch(() => {});
    } else if (audio) {
      audio.pause();
    }
  }, [shouldPause, location]);

  return (
    <>
      {/* Shared Background Audio */}
      <audio ref={audioRef} loop autoPlay src={audioFile} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/memories" element={<Memories onVideoPlay={() => setShouldPause(true)} onVideoEnd={() => setShouldPause(false)} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
