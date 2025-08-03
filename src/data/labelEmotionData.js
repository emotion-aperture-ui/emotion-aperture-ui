// labelEmotionData.js (CommonJS 버전)
const fs = require('fs');
const emotionData = require('./emotionData_label.json');
const questionData = require('./questionData_label.json');

const labeledEmotion = {};

for (let i = 1; i <= 35; i++) {
  const emotionId = `E${i}`;
  const questionId = `D1-1-${i}`;

  labeledEmotion[emotionId] = {
    ...emotionData[emotionId],
    question: {
      id: questionId,
      ...questionData[questionId]
    }
  };
}

fs.writeFileSync('./src/data/labeledEmotionData.json', JSON.stringify(labeledEmotion, null, 2), 'utf-8');
console.log('💾 감정-질문 매핑 저장 완료!');
