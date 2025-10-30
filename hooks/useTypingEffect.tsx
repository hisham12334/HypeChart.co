import { useState, useEffect } from 'react';

export const useTypingEffect = (text: string, duration: number, start: boolean) => {
  const [displayText, setDisplayText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!start) return;

    setDisplayText('');
    setIsFinished(false);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
        setIsFinished(true);
      }
    }, duration / text.length);

    return () => clearInterval(intervalId);
  }, [text, duration, start]);

  return { displayText, isFinished };
};
