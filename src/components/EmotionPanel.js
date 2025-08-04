import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/EmotionQuestionData.json';
import '../App.css';

const getRandomEmotions = (data, count = 4) => {
  const keys = Object.keys(data).filter(
    (key) => data[key]?.emotion && data[key]?.question
  );
  return [...keys].sort(() => 0.5 - Math.random()).slice(0, count);
};

const EmotionPanel = ({ lang = 'ko' }) => {
  const [randomEmotionIds, setRandomEmotionIds] = useState([]);
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);
  const navigate = useNavigate(); // ✅ 추가됨

  useEffect(() => {
    setRandomEmotionIds(getRandomEmotions(data, 4));
  }, []);

  const handleEmotionClick = (id) => {
  setSelectedEmotionId(id);
  setTimeout(() => {
    navigate('/nextpage', {
      state: {
        emotionId: id,
      },
    });
  }, 500);
};

  const selectedEmotion = selectedEmotionId ? data[selectedEmotionId] : null;
  const getText = (item) => (item ? (lang === 'en' ? item.text_en : item.text_ko) : '');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        height: '100vh',
        backgroundColor: '#000',
        gap: '40px',
        flexWrap: 'wrap',
      }}
    >
      {/* 좌측 감정 패널 */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
        <img src="/assets/Emotion/EmotionLeft.svg" alt="Emotion Left" style={{ width: '100%', height: 'auto' }} />
        <div
          style={{
            position: 'absolute',
            top: '21%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            width: '80%',
            maxWidth: '90%',
            zIndex: 10,
          }}
        >
          {randomEmotionIds.map((id) => {
            const emotionItem = data[id]?.emotion;
            return (
              <div
                key={id}
                onClick={() => handleEmotionClick(id)}
                style={{
                  cursor: 'pointer',
                  border: selectedEmotionId === id ? '2px solid #00ffcc' : '2px solid white',
                  borderRadius: '12px',
                  padding: '6px 10px',
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor:
                    selectedEmotionId === id ? 'rgba(0,255,200,0.2)' : 'rgba(255,255,255,0.1)',
                  fontSize: 'clamp(16px, 4vw, 22px)',
                }}
              >
                {emotionItem ? getText(emotionItem) : '(감정 없음)'}
              </div>
            );
          })}
        </div>
      </div>

      {/* 우측 질문 패널 */}
      <div className="aperture-float" style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
        <img src="/assets/Emotion/EmotionRight.svg" alt="Emotion Right" style={{ width: '100%', height: 'auto' }} />
        {selectedEmotion?.question && (
          <div
            style={{
              position: 'absolute',
              top: '26%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              textAlign: 'center',
              padding: '10px 14px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '10px',
              fontSize: 'clamp(16px, 4vw, 22px)',
              whiteSpace: 'pre-wrap',
              maxWidth: '90%',
              zIndex: 10,
            }}
          >
            {getText(selectedEmotion.question)}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionPanel;
