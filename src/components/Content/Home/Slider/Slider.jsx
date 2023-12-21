import React, { useState, useEffect } from 'react';
import Styles from "./Slider.module.css"

const images = [
  'https://wallpapers.com/images/hd/720p-43zt1x07xkmju9wg.jpg',
  'https://e0.pxfuel.com/wallpapers/905/706/desktop-wallpaper-ecommerce-e-commerce.jpg',
  'https://e0.pxfuel.com/wallpapers/466/782/desktop-wallpaper-e-commerce-e-commerce.jpg',
  'https://c0.wallpaperflare.com/preview/676/705/125/ecommerce-online-marketing-internet.jpg',
  'https://video.wisetechglobal.com/49543317/56073457/589300fc9fca63380c27b278a8a16463/800x/thumbnail.jpg'
];

export const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [navButtonHidden, setNavButtonHidden] = useState(true);
  let timer;

  useEffect(() => {
    const startTimer = () => {
      timer = setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
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
    setNavButtonHidden(false)
  };

  const handleMouseLeave = () => {
    setNavButtonHidden(true)
    clearTimeout(timer);
    timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  return (
    <div className={Styles.slider} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={images[currentImage]} className={Styles.sliderImage}/>
      <button onClick={handlePrev} className={`${Styles.navButton} ${Styles.left} ${navButtonHidden? Styles.hidden:""}`}>
        {'<'}
      </button>
      <button onClick={handleNext} className={`${Styles.navButton} ${Styles.right} ${navButtonHidden? Styles.hidden:""}`}>
        {'>'}
      </button>
    </div>
  );
};

