// src/api/mongsilAPI.js

import questionData from '../data/questionData.json';

/**
 * ID로 질문 받아오기
 * @param {string} id 예: "A1-1-1"
 */
export function getMongsilQuestion(id) {
  if (!questionData[id]) return null;
  return {
    ko: questionData[id].text_ko,
    en: questionData[id].text_en,
  };
}

/**
 * 버튼값 (10, 30, 60)에 따라 해당 aperture 조건에 맞는 질문 목록 반환
 * @param {number} buttonValue
 * @returns {string[]} - 질문 ID 배열
 */
export function getQuestionsByButton(buttonValue) {
  return Object.keys(questionData).filter((id) => {
    return questionData[id].aperture === buttonValue;
  });
}
