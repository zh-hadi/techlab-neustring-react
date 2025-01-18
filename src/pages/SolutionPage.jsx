import  { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorContext } from '../App';
import Page1 from './solutions/Page1';
import Page2 from './solutions/Page2';
import Page3 from './solutions/Page3';
import Page4 from './solutions/Page4';
import Page5 from './solutions/Page5';
import Page6 from './solutions/Page6';
import Page7 from './solutions/Page7';
import { useSolutionPageIndex } from '../contexts/SolutionPageContext'

const SolutionPage = () => {
  // const { setColor } = useContext(ColorContext);
  // const location = useLocation();
  
  // useEffect(() => {
  //   setColor(['linear-gradient(270deg, #C4BDF4 0%, #F0ECF8 100%)', 'style']);
  // }, [setColor, location]);

  // const cards = [
  //   { title: 'Laying the Groundwork for Success', icon: 'aaaaaaaaaaaaa' },
  //   { title: 'techlab 333', icon: 'aaaaaaaaaaaaa' },
  //   { title: 'good morning', icon: 'aaaaaaaaaaaaa' },
  //   { title: 'hello world', icon: 'aaaaaaaaaaaaa' },
  // ];

  const solIndex = useSolutionPageIndex();

  console.log(solIndex.solutionIndex)

  const [currentIndex, setCurrentIndex] = useState(0);

  const pages = [Page2,  Page1, Page3, Page4, Page5, Page6, Page7];

  // Use currentIndex to determine which page to render
  const CurrentPage = pages[solIndex.solutionIndex];

  const handelCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className='mx-auto'>
        {/* Render the page based on currentIndex */}
        <CurrentPage />

      </div>
    </>
  );
};

export default SolutionPage;
