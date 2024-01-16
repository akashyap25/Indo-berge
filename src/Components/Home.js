import React, { useState, useEffect } from 'react';
import { image1, image2, image3 } from '../assets';
import left from "../assets/icon-angle-left.svg"
import right from "../assets/icon-angle-right.svg";
import Products from './products';

const imageData = [
  image1,
  image2,
  image3,
  // Add more images as needed
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Move to the next slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imageData.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      // Clear the timer when the component unmounts or the slide changes
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imageData.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Calculate the height based on the screen width while maintaining aspect ratio
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const calculatedHeight = (screenWidth / 16) * 9; // Assuming a 16:9 aspect ratio

  return (
    <>
      <div   className="relative w-full z-0 mt-24" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden rounded-lg md:h-[calc(100vh-5rem)]">
          {imageData.map((imageUrl, index) => (
            <div
              key={index}
              className={`absolute block w-full h-${calculatedHeight} -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-700 ease-in-out`}
              data-carousel-item
            >
              <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {imageData.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-300'
              }`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPreviousSlide}
        >
          <span><img src={left} alt='previous' /></span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <span><img src={right} alt='next' /></span>
        </button>
      </div>
    </>
  );
}

export default Home;
