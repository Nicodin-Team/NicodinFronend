// MyAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assests/Animations/Animation - 1.json'; // Import your animation JSON file

const MyAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, 
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
  };

  return (
    <div className='animation-margin'>
      <Lottie
        options={defaultOptions}
        height={500}
        width={500}
      />
    </div>
  );
};

export default MyAnimation;
