import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ 추가
import EmotionPanel from './components/EmotionPanel.js';
import NextPage from './components/NextPage.js'; // ✅ 다음 페이지 컴포넌트도 추가

function App() {
  const [lang, setLang] = useState('ko');

  const toggleLang = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  return (
    <BrowserRouter> {/* ✅ 전체를 BrowserRouter로 감쌈 */}
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

        <Routes> {/* ✅ Routes로 감싸고 각 Route 지정 */}
          <Route path="/" element={<EmotionPanel lang={lang} />} />
          <Route path="/nextpage" element={<NextPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
