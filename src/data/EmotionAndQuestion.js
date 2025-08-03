// CommonJS 버전
const fs = require('fs');
const emotionData = require('./emotionData_label.json');
const questionData = require('./questionData_label.json');

const mergedData = {};

for (let i = 1; i <= 35; i++) {
  const emotionId = `E${i}`;
  const questionId = `D1-1-${i}`;

  mergedData[emotionId] = {
    emotion: {
      text_ko: emotionData[emotionId].text_ko,
      text_en: emotionData[emotionId].text_en,
      aperture: emotionData[emotionId].aperture,
      label: emotionData[emotionId].label
    },
    question: {
      id: questionId,
      text_ko: questionData[questionId].text_ko,
      text_en: questionData[questionId].text_en,
      aperture: questionData[questionId].aperture,
      label: questionData[questionId].label,
      next: questionData[questionId].next
    }
  };
}

// ✅ 저장: 현재 폴더에 저장됨
fs.writeFileSync('./src/data/emotionQuestionData.json', JSON.stringify(mergedData, null, 2), 'utf-8');
console.log('📄 감정+질문 통합 JSON 저장 완료!');
