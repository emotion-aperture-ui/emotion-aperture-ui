import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import data from '../data/EmotionQuestionData.json';

const NextPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = location.state?.lang || 'en'; // ✅ 언어는 동적으로 받아옴
  const emotionId = location.state?.emotionId;
  const selectedData = emotionId ? data[emotionId] : null;

  const getText = (item) => {
    if (!item) return '';
    return lang === 'ko' ? item.text_ko : item.text_en;
  };

  const getButtonText = () => {
    return lang === 'ko' ? '다시 감정 선택하기' : 'Choose Emotion Again';
  };

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
      {/* 🎯 배경 조리개 이미지 */}
      <img
        src="/assets/Emotion/EmotionRight.svg"
        alt="iris"
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
        🎯 {getText(selectedData?.emotion) || 'No Emotion'}
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
        {getText(selectedData?.question) || 'No Question'}
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
        {getButtonText()}
      </button>
    </div>
  );
};

export default NextPage;
