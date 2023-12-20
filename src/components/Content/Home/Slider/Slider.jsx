import React, { useState, useEffect } from 'react';
import Styles from "./Slider.module.css"

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMgKsCtUk1g9HXtcZH4lUcmjhEzrBsJCmw&usqp=CAU',
  'https://wallpapers.com/images/hd/720p-43zt1x07xkmju9wg.jpg'
];

export const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  let timer;

  useEffect(() => {
    const startTimer = () => {
      timer = setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        startTimer(); 
      }, 3000);
    };

    startTimer(); 

    return () => clearTimeout(timer);
  }, [currentImage]);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleMouseEnter = () => {
    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  return (
    <div className={Styles.slider} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button onClick={handlePrev} className={Styles.navButton}>
        {'<'}
      </button>
      <img src={images[currentImage]} className={Styles.sliderImage}/>
      <button onClick={handleNext} className={Styles.navButton}>
        {'>'}
      </button>
    </div>
  );
};

