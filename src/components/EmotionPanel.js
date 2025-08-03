import React, { useState, useEffect } from 'react';
import data from '../data/EmotionQuestionData.json';
import '../App.css'; // ✨ 애니메이션 CSS 여기에 있다고 가정

const getRandomEmotions = (data, count = 4) => {
  const keys = Object.keys(data).filter(
    (key) => data[key] && data[key].emotion && data[key].question
  );
  const shuffled = [...keys].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const EmotionPanel = ({ lang = 'ko' }) => {
  const [randomEmotionIds, setRandomEmotionIds] = useState([]);
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);

  useEffect(() => {
    const randomIds = getRandomEmotions(data, 4);
    setRandomEmotionIds(randomIds);
  }, []);

  const handleEmotionClick = (id) => {
    setSelectedEmotionId(id);
  };

  const selectedEmotion = selectedEmotionId ? data[selectedEmotionId] : null;

  const getText = (item) => {
    if (!item) return '';
    return lang === 'en' ? item.text_en : item.text_ko;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        height: '100vh',
        backgroundColor: '#000',
        gap: '60px',
      }}
    >
      {/* 좌측 조리개 + 감정 버튼들 */}
      <div style={{ position: 'relative', width: '300px' }}>
        <img
          src="/assets/Emotion/EmotionLeft.svg"
          alt="Emotion Left"
          style={{ width: '100%' }}
        />

        {/* 감정 버튼들 - 좌측 조리개에 고정 정렬 */}
        <div
        
          style={{
            position: 'absolute',
            top: '21%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '17px',
            width: '80%',
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
                  padding: '7px',
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor:
                    selectedEmotionId === id ? 'rgba(0,255,200,0.2)' : 'rgba(255,255,255,0.1)',
                  fontSize: '14px',
                }}
              >
                {emotionItem ? getText(emotionItem) : '(감정 없음)'}
              </div>
            );
          })}
        </div>
      </div>

      {/* 우측 조리개 + 질문 (하늘하늘 애니메이션) */}
      <div
      
        className="aperture-float"
        style={{ position: 'relative', width: '300px' }}
      >
        <img
          src="/assets/Emotion/EmotionRight.svg"
          alt="Emotion Right"
          style={{ width: '100%' }}
        />
        {selectedEmotion && selectedEmotion.question && (
          <div
            style={{
              top: '26%',
              position: 'absolute',
              
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              textAlign: 'center',
              padding: '12px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '10px',
              fontSize: '16px',
              whiteSpace: 'pre-wrap',
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
