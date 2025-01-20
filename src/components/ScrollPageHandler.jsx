import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollPageHandler = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Check if the user has reached the bottom of the page
    if (scrollPosition + windowHeight >= docHeight) {
      // Navigate to the contact page when the bottom is reached
      navigate('/contact');
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // No UI needed for this component
};

export default ScrollPageHandler;