import React, { useState } from 'react';
import EmotionPanel from './components/EmotionPanel.js';

function App() {
  const [lang, setLang] = useState('ko');

  const toggleLang = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  return (
    <div>
      <button
        onClick={toggleLang}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '14px',
          background: '#333',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {lang === 'ko' ? '🇰🇷 한국어' : '🇺🇸 English'}
      </button>

      <EmotionPanel lang={lang} />
    </div>
  );
}

export default App;
