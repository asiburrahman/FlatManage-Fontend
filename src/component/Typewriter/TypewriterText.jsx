import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
  const handleType = () => {
    
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="App">
      <h1 className='text-xl lg:text-5xl font-bold text-shadow-2xl' style={{  margin: 'auto 0', fontWeight: 'normal' }}>
        Welcome to {' '}
        <span
          style={{  fontWeight: 'bold' }}
          className='text-accent'
          aria-live="polite"
        >
          <Typewriter
            words={['FoodNeighbor']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterText;
