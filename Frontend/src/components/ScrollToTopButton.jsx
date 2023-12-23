import React from 'react';
import { arrow } from '../assets/assets';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed bottom-20 right-5 h-10 w-10 z-[1]"
      onClick={scrollToTop}
    >
      <img src={arrow} alt="GoToTop" className="w-full h-full" />
    </div>
  );
};

export default ScrollToTopButton;
