// src/components/Photos.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const samplePhotos = [
  { src: require('../assets/bro1.jpg'), caption: 'My forever supporter, through thick and thin, Your strength lifts me from within.♾️' },
  { src: require('../assets/bro2.jpg'), caption: 'Every moment with you is a memory I cherish forever ♾️' },
  { src: require('../assets/bro4.jpg'), caption: 'Through every moment, you stood tall, Your love caught me when I’d fall ❤️' },
  { src: require('../assets/bro5.jpg'), caption: 'You’ve always had my back, even when I didn’t know I needed it ❤️' },
  { src: require('../assets/bro8.jpg'), caption: 'The light in my life, the brother who brings me peace 🫂' },
  { src: require('../assets/bro6.jpg'), caption: 'Always there with a smile so bright, You turn my darkness into light 🫂' },
  { src: require('../assets/bro7.jpg'), caption: 'Dada, you mean the world to me 🌍' },
  { src: require('../assets/brother.jpg'), caption: 'Your actions speak louder than words could say, Brother, you are my inspiration every day 🌍' },
];

function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const navigate = useNavigate();

  return (
    <section style={{ padding: '30px', backgroundColor: '#fff0f5', borderRadius: '15px' }}>
      <h2 style={{ textAlign: 'center', color: '#d6336c' }}>📸 Photo Memories</h2>
      <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '40px' }}>
        Captured moments with your brother that live forever!
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '30px',
        justifyItems: 'center',
      }}>
        {samplePhotos.map((photo, index) => (
          <div key={index} style={{ textAlign: 'center', width: '100%', maxWidth: '240px' }}>
            <img
              src={photo.src}
              alt={photo.caption}
              onClick={() => setSelectedPhoto(photo)}
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'contain',
                backgroundColor: '#f0f0f0',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <p style={{
              marginTop: '10px',
              color: '#a0522d',
              fontSize: '14px',
              lineHeight: '1.5'
            }}>{photo.caption}</p>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#d6336c',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b52a57'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d6336c'}
        >
          ⬅️ Back to his world
        </button>
      </div>

      {/* Lightbox View */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer',
          }}
        >
          <img
            src={selectedPhoto.src}
            alt="Zoomed"
            style={{
              width: '80%',
              maxWidth: '600px',
              borderRadius: '15px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      )}
    </section>
  );
}

export default Photos;
