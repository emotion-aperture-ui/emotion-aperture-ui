// loadEmotionImages.js
function importAll(r) {
  return r.keys().map(r);
}

const loadEmotionImages = (folderName) => {
  try {
    const images = importAll(
      require.context(`../assets/Emotion/${folderName}`, false, /\.svg$/)
    );
    return images;
  } catch (error) {
    console.error('이미지를 불러오지 못했어요:', error);
    return [];
  }
};

export default loadEmotionImages;
