// EmotionRightComponent.js
import React from 'react';
import '../styles/EmotionPanel.css'; // fade-up animation 포함된 CSS

const EmotionRightComponent = ({ text }) => {
  if (!text?.trim()) return null;

  return (
    <div style={{ position: 'relative', width: '1000px', height: '1300%' }}>
      <img
        src="/assets/Emotion/EmotionRight.svg"
        alt="Emotion Right"
        style={{ width: '100%' }}
      />

      <div
        className="fade-up"
        style={{
          position: 'absolute',
          top: '18%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          textAlign: 'center',
          padding: '8px 12px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '12px',
          fontSize: 'clamp(14px, 4vw, 20px)',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.5',
          maxWidth: '300%',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default EmotionRightComponent;
