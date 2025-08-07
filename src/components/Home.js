import React from 'react';
import { Link } from 'react-router-dom';

const heartContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 0,
  pointerEvents: 'none',
};

const heartStyle = {
  position: 'absolute',
  color: '#ff69b4',
  animation: 'float 10s infinite',
  fontSize: '24px',
  opacity: 0.7,
};

const styleTag = (
  <style>
    {`
      @keyframes float {
        0% { transform: translateY(100vh) scale(0.5) rotate(0deg); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-10vh) scale(1.2) rotate(360deg); opacity: 0; }
      }

      @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

      body {
        background: linear-gradient(135deg, #2c003e, #0a0a0a);
        background-size: cover;
        margin: 0;
        padding: 0;
      }

      .title {
        font-family: 'Pacifico', cursive;
        font-size: 48px;
        color: #ffffff;
        text-shadow: 0 0 10px #ff69b4, 0 0 30px #ff69b4;
        margin-bottom: 20px;
      }

      .nav-link:hover {
        background-color: #b3e0ff;
        transform: scale(1.05);
      }
    `}
  </style>
);

const floatingHearts = (
  <div style={heartContainerStyle}>
    {Array.from({ length: 25 }).map((_, i) => (
      <div
        key={i}
        style={{
          ...heartStyle,
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 5}s`,
          fontSize: `${20 + Math.random() * 25}px`,
        }}
      >
        ❤️
      </div>
    ))}
  </div>
);

function Home() {
  const containerStyle = {
    position: 'relative',
    padding: '60px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
    textAlign: 'center',
    zIndex: 2,
    color: '#fff',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    background: '#ffffff10',
    padding: '15px 0',
    borderRadius: '12px',
    marginBottom: '40px',
    boxShadow: '0 8px 20px rgba(255,255,255,0.1)',
    zIndex: 2,
    backdropFilter: 'blur(10px)',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '12px 24px',
    borderRadius: '8px',
    backgroundColor: '#ffb6c1',
    transition: 'all 0.3s ease',
  };

  const paragraphStyle = {
    fontSize: '22px',
    maxWidth: '700px',
    margin: 'auto',
    color: '#ffffff',
    lineHeight: '1.8',
    opacity: 0.9,
    whiteSpace: 'pre-line',
    padding: '20px',
    backgroundColor: '#ffffff10',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(255,255,255,0.1)',
  };

  return (
    <div>
      {styleTag}
      {floatingHearts}

      <section style={containerStyle}>
        <h1 className="title">Happy Birthday Dada🫂</h1>

        <nav style={navStyle}>
          <Link to="/photos" className="nav-link" style={linkStyle}>❤️Memories</Link>
          <Link to="/memories" className="nav-link" style={linkStyle}>🫂Guardian</Link>
        </nav>

        <p style={paragraphStyle}>
          Thank you, dear brother, for all the joy, strength, and unconditional love you've given me.{"\n"}
          You continue to guide and inspire me every single day.{"\n\n"}
          With love always,{"\n"}Your Daughter 💖
        </p>
      </section>
    </div>
  );
}

export default Home;
