import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NextPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emotionId = location.state?.emotionId;

  const goBackToEmotion = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* 우측 조리개 이미지 */}
<img
  src="/assets/Emotion/EmotionRight.svg"
  alt="조리개"
  style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // 완전 중앙 정렬!
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    zIndex: 0,
    opacity: 0.25, // 조절 가능
    pointerEvents: 'none',
  }}
/>


      {/* 텍스트 콘텐츠 */}
      <div style={{ textAlign: 'center', zIndex: 10 }}>
        <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)' }}>🎯 마치 나 혼자 섬에 있는 것 같아</h2>
        <p style={{ fontSize: 'clamp(16px, 4vw, 22px)', marginTop: '20px' }}>
          살다보면 내면에 집중할 때가 꼭 있어야 한다고 합니다. 당신이 그때인가요?
        </p>

        <button
          onClick={goBackToEmotion}
          style={{
            marginTop: '40px',
            padding: '12px 24px',
            backgroundColor: '#00ffcc',
            color: '#000',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          다시 감정 선택하러 가기
        </button>
      </div>
    </div>
  );
};

export default NextPage;
