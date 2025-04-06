import React, { useState, useEffect } from 'react';


const Slider = () => {
  const images = [
    'https://i.pinimg.com/474x/b0/8b/f8/b08bf8514cb70a22b5f90134a76f1165.jpg',
    'https://aliimranedaara.com/images/images_articles/houfaz.jpg',
    'https://scontent.fdkr5-1.fna.fbcdn.net/v/t1.6435-9/126143974_101420188467740_2741390293593479974_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=6ZKmwyHyJcIQ7kNvwHigFNS&_nc_oc=Adlq3NvyGWsD2-DLbXEj5rQy9zaNbaUvy3z9qe54BaoNTjL2kLuEp00wfZfpHXcgStRFbNDhoigM_DoYOe5QuUov&_nc_zt=23&_nc_ht=scontent.fdkr5-1.fna&_nc_gid=_YiCawMlU8j5fEjK2Q0F8Q&oh=00_AfG6hfLsl9Tt_uHYXLV0dXob4T574bUdXBBvmeu_yqjcZQ&oe=681A3717',
    'https://www.aliimranedaara.com/images/conference2.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [images.length]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-image" />
      </div>

      {/* Dots Navigation */}
      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
