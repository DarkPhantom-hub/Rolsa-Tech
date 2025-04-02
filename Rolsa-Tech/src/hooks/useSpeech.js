// /hooks/useSpeech.js
import { useEffect } from 'react';

const useSpeech = (text) => {
  useEffect(() => {
    if (text && window.speechSynthesis) {
      const speech = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(speech);
    }
  }, [text]);

  return null; // Custom hook doesn't return anything
};

export default useSpeech;
