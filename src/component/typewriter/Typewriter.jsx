import React, { useState, useEffect } from 'react';
import './type.scss'; // Import CSS for styling

const Typewriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[currentWordIndex]);
      setTimeout(() => {
        setCurrentWord('');
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000); // Adjust delay between words here
    }, 2000); // Adjust delay for each word here

    return () => clearInterval(interval);
  }, [words, currentWordIndex]);

  return (
    <div className="typewriter">
      <div className="typewriter-text">
        <span className={`word ${currentWord && 'slide-in'}`}>{currentWord}</span>
      </div>
    </div>
  );
};

export default Typewriter;
