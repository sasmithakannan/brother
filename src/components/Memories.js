import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myVideo from '../assets/whatsapp_video_2025_07_30.mp4';

function Memories() {
  const navigate = useNavigate();
  const backgroundImage = "/e7856dcc-dc1e-4976-95d1-88133b50e2cf.png";
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpened(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      padding: '30px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffe6ee',
      position: 'relative',
    }}>
      <style>{`
        @keyframes openLetter {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }

        .envelope {
          width: 200px;
          height: 150px;
          background: #f0488b;
          border-radius: 12px;
          position: relative;
          margin-top: 100px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          animation: pulse 1.5s infinite;
        }

        .envelope::before {
          content: "";
          position: absolute;
          top: -60px;
          left: 0;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 60px solid #f0488b;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .content-wrapper {
          animation: openLetter 1s ease forwards;
          transform-origin: top;
          display: ${isOpened ? 'block' : 'none'};
        }

        .memory-text {
          color: #4b2c3f;
          font-size: 1.2rem;
          line-height: 2;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          text-align: center;
          max-width: 900px;
          margin: 40px auto 30px;
          background-color: rgba(255, 230, 238, 0.85);
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        h2 {
          color: #c2185b;
          text-align: center;
          font-family: 'Dancing Script', cursive;
          font-size: 3rem;
          margin-top: 20px;
          margin-bottom: 10px;
          text-shadow: 1px 1px #fff;
        }

        .back-button {
          display: block;
          margin: 30px auto 0;
          padding: 12px 28px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          background-color: #f0488b;
          color: white;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-align: center;
        }

        .back-button:hover {
          background-color: #d93675;
        }

        .video-player {
          margin: 20px auto 0;
          display: block;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          max-width: 900px;
          width: 30%;
        }
      `}</style>

      {/* Envelope animation */}
      {!isOpened && <div className="envelope"></div>}

      {/* Letter and Video */}
      {isOpened && (
        <div className="content-wrapper">
          <h2>To my Dada❤️♾️</h2>

          <p className="memory-text">
            Naveen, you are not just my brother, you are like a father to me. From childhood until now, I have always felt the absence of a father's presence in my life. But I never truly missed it—because you and amma have already given me everything I needed, even before I asked for it.
            <br /><br />
            I honestly don't know how to repay all that you both have done, but I promise you this — one day, I will make both of you proud. Thank you for giving me so much freedom, for supporting me in every situation, and for always standing by my side no matter what I choose to do.
            <br /><br />
            I am not kidding, I genuinely have a deep respect for you. Sometimes I look at you and wonder how you carry all your responsibilities with such strength and grace. You are emotionally strong, mature, and responsible — you inspire me every single day.
            <br /><br />
            Having you as a brother is one of the biggest blessings in my life. You are my role model, my guide, and my biggest supporter. I am so proud to call you my brother ♾
            <br /><br />
            Thanks for taking all the responsibility and handling everything with maturity 🫂 This is just a small gesture of love from me 🫶🏻🫂
            <br /><br />
            I know you have dreams too — dreams you’ve silently sacrificed to keep everything running. But I truly wish and pray that someday, you achieve everything you've ever hoped for. You deserve happiness, success, and peace more than anyone else I know. I’ll always be by your side, cheering you on — just like you’ve done for me.
          </p>

          <video className="video-player" controls>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button className="back-button" onClick={() => navigate('/')}>
            ⬅️ Back to his world
          </button>
        </div>
      )}
    </section>
  );
}

export default Memories;
