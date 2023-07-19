import React, { useEffect } from 'react';
import './styles/scrollUp.css';

const ScrollUp = () => {
  useEffect(() => {
    const scrollListener = () => {
      const scrollUp = document.querySelector('.scroll_up');
      if (window.scrollY >= 560) {
        scrollUp.classList.add('show_scroll');
      } else {
        scrollUp.classList.remove('show_scroll');
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <a href="#home" className="scroll_up">
      <i className="uil uil-arrow-up scroll_up_icon" />
    </a>
  );
};

export default ScrollUp;
