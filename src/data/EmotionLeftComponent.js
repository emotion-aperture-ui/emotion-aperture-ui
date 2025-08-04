// EmotionLeftComponent.js
import React from 'react';

const EmotionLeftComponent = ({ text }) => {
  return (
    <div style={{ position: 'relative', width: '45%', height: '100%' }}>
      <img
        src="/assets/Emotion/EmotionLeft.svg"
        alt="Emotion Left"
        style={{
          width: '80%',
          margin: '0 auto',
          display: 'block',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: 'clamp(14px, 4vw, 20px)',
          textAlign: 'center',
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.4',
          padding: '6px 12px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '12px',
          maxWidth: '80%',
          width: 'fit-content',
          display: 'inline-block',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default EmotionLeftComponent;
