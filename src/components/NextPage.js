import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import data from '../data/EmotionQuestionData.json';

const NextPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [lang, setLang] = useState(location.state?.lang || 'en');
  const emotionId = location.state?.emotionId;
  const selectedData = emotionId ? data[emotionId] : null;

  const getText = (item) =>
    item ? (lang === 'en' ? item.text_en : item.text_ko) : '';
<button onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}>
  {lang === 'ko' ? 'English' : '한국어'}
</button>

  const isMobile = window.innerWidth <= 480;

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* 🌐 언어 전환 버튼 (반응형 위치 조정) */}
  <div
  style={{
    position: 'fixed', // ← 화면 스크롤과 무관하게 고정
    top: '5%',
    right: '5%',
    zIndex: 9999, // ← 어떤 요소 위든 보이게
    backgroundColor: '#ffffff88',
    padding: '6px 12px',
    borderRadius: '10px',
  }}
>
  <button
    onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
    style={{
      background: 'transparent',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#000',
      cursor: 'pointer',
    }}
  >
    {lang === 'ko' ? 'English' : '한국어'}
  </button>
</div>


      {/* 🔘 배경 조리개 이미지 */}
      <img
        src="/assets/Emotion/EmotionRight.svg"
        alt="조리개"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.25,
        }}
      />

      {/* 🎯 감정 텍스트 */}
      <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', zIndex: 1 }}>
        🎯 {getText(selectedData?.emotion) || '감정 없음'}
      </h2>

      {/* ❓ 질문 텍스트 */}
      <p
        style={{
          fontSize: 'clamp(16px, 4vw, 22px)',
          marginTop: '20px',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '90%',
          whiteSpace: 'pre-wrap',
        }}
      >
        {getText(selectedData?.question) || '질문 없음'}
      </p>

      {/* 🔁 다시 감정 선택 버튼 */}
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '40px',
          padding: '12px 24px',
          backgroundColor: '#00ffcc',
          color: '#000',
          border: 'none',
          borderRadius: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
         {lang === 'ko' ? '다시 감정 선택하기' : 'Choose Emotion Again'}
      </button>
    </div>
  );
};

export default NextPage;
