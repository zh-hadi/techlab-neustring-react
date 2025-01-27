
import { AnimatePresence,motion } from 'framer-motion';
import logo from '../assets/logo.svg';
import SideBar from '../components/SideBar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ColorContext } from '../App';
import { useContext, useState, useRef, useEffect } from 'react';
import HeroImage from '../assets/hero2.png';
import HeroVideo from '../assets/hero-video.mp4';
import NeuStringSideLogo from '../assets/neu-string-side-logo.png';
import { usePageColors } from '../contexts/PagesColorContext';
import { useSolutionPageIndex } from '../contexts/SolutionPageContext';
import ScrollPageHandler from "./ScrollPageHandler";



const pageVariants = {
  initial: { y: 1000, opacity: 0 },
  animate: { y: [1000, -30, 0], opacity: 1 },
  exit: { y: 1000, opacity: 0 },
};

const Layout = () => {
  const { color } = useContext(ColorContext);
  const [isScrolling, setIsScrolling] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const location = useLocation();

  const solIndex = useSolutionPageIndex();
  

  const isVideoBackground = color[color.length - 1] === 'video';
  const backgroundStyle = isVideoBackground
    ? {}  
    : { backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' };



    const navigate = useNavigate();

    const routes = ["/home", "/about", "/solution", "/community", "/contact"];

    const handleScreenClick = (e) => {
      console.log(e);
      if (sidebarRef.current && sidebarRef.current.contains(e.target)) {
        console.log('side bar clicked'+ sidebarRef.current)
        return; // Prevent navigation if the click is inside the sidebar
      }
      if(location.pathname === '/solution' && solIndex.solutionIndex < 6) {
        console.log(solIndex.solutionIndex);
        solIndex.setSolutionIndex(solIndex.solutionIndex + 1)
        exit()
      }else{

        solIndex.setSolutionIndex(0)
        const currentIndex = routes.findIndex((route) => route === location.pathname);
        const nextIndex = (currentIndex + 1) % routes.length; 
        navigate(routes[nextIndex]);
      }
    };

    const sidebarRef = useRef(null);



    const handleWheel = (event) => {
      const { scrollY, innerHeight } = window;
      const scrollHeight = document.documentElement.scrollHeight;

     
    
      if (event.deltaY > 0) {
        // Scrolling down
        if (scrollY + innerHeight >= scrollHeight - 1) { // Slight offset to ensure you are at the bottom
          if (location.pathname === '/solution' && solIndex.solutionIndex < 6) {
            solIndex.setSolutionIndex(solIndex.solutionIndex + 1);
          } else {
            solIndex.setSolutionIndex(0);
            const currentIndex = routes.findIndex((route) => route === location.pathname);
            const nextIndex = (currentIndex + 1) % routes.length;
            navigate(routes[nextIndex]);
          }
        }
      } else {
        // Scrolling up
        if (scrollY <= 0) { // User is at the top of the page
          const currentIndex = routes.findIndex((route) => route === location.pathname);
          const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
          navigate(routes[prevIndex]);
        }
      }
    };
    
    
    

    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);
    
    const handleTouchStart = (event) => {
      setTouchStartY(event.touches[0].clientY); // Capture the starting point of the touch
    };
    
    const handleTouchEnd = (event) => {
      setTouchEndY(event.changedTouches[0].clientY); // Capture the end point of the touch
    
      const deltaY = touchStartY - touchEndY; // Calculate the swipe distance

      console.log("deltay " + touchStartY + "      " + touchEndY + " " + deltaY)
    
      const container = document.querySelector(".content-container"); // Adjust this selector to your scrolling container
      const containerHeight = container.offsetHeight; // Height of the container
      console.log("height of the container ===== "+ containerHeight);
      const contentHeight = container.scrollHeight; // Total scrollable height
      console.log("height of the scroll ===== "+ contentHeight);
      const scrollTop = container.scrollTop; // Current scroll position
      
      const isAtBottom = scrollTop + containerHeight >= contentHeight;
      const isAtTop = scrollTop === 0;
    
      if (Math.abs(deltaY) > 50) {
        // Determine swipe direction
        if (deltaY > 0 && isAtBottom) {
          // Swipe up and at the bottom of the container
          if (location.pathname === "/solution" && solIndex.solutionIndex < 6) {
            solIndex.setSolutionIndex(solIndex.solutionIndex + 1);
          } else {
            solIndex.setSolutionIndex(0);
            const currentIndex = routes.findIndex((route) => route === location.pathname);
            const nextIndex = (currentIndex + 1) % routes.length;
            navigate(routes[nextIndex]);
          }
        } else if (deltaY < 0 && isAtTop) {
          // Swipe down and at the top of the container
          if (solIndex.solutionIndex > 0) {
            solIndex.setSolutionIndex(solIndex.solutionIndex - 1);
          } else {
            const currentIndex = routes.findIndex((route) => route === location.pathname);
            const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
            navigate(routes[prevIndex]);
          }
        }
      }
    };
    
  
    



    const [solutionIndex, setSolutionIndex] = useState(0);

    const handelSolutionIndex = () => {
      setSolutionIndex(solutionIndex + 1);
    }

    const pageColor = usePageColors();

    let bgColor = pageColor.find(item => item.page === location.pathname.substring(1))?.color;
    let navColor = pageColor.find(item => item.page === location.pathname.substring(1))?.navColor;

    console.log(pageColor)

    if('solution' === location.pathname.substring(1)){
      console.log('solution pages is : ')
      const solutionPage = pageColor.find(item => item.page === 'solution');


      if (solutionPage) {
        console.log(solutionPage.page); 
        
       
        console.log('Solution sub-pages are:'+ solutionIndex);
        console.log(solutionPage.pages[0]); 
        console.log(solIndex.solutionIndex)
        bgColor = solutionPage.pages[solIndex.solutionIndex].color;
        navColor = solutionPage.pages[solIndex.solutionIndex].navColor;
      } else {
        console.log('Solution page is not found');
      }
    }else{
      solIndex.setSolutionIndex(0)
    }

    
  return (
    <>
 
      {isVideoBackground && location.pathname === '/home' && (
        <div className='h-screen w-full z-50'>
          <div className="relative h-screen w-full">
              <video autoPlay loop muted className="video-bg h-screen w-full object-cover">
                <source src={HeroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className='absolute top-0  right-0 bottom-0 left-0 bg-[#0E2C4699]'></div>
              <img className='absolute  bottom-5  right-5 ' src={NeuStringSideLogo} alt="" />

          </div>
          
        </div>
      )}

          
    
        <motion.div
          // onClick={handleScreenClick}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd} 
          className={`${
            color[color.length - 1] === 'class' ? color[0] : ''
          }  md:h-screen w-full h-full flex flex-col px-3 md:px-10 pt-5 absolute top-0 left-0 right-0 bottom-0 z-0`}
          // style={color[color.length - 1] === 'style' ? { background: homeColor } : backgroundStyle}
          style={{ background: bgColor}}

          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 1, ease: "easeInOut" }}

        >
          <div className="px-5 py-2 bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] w-full md:w-3/5 mx-auto flex items-center justify-between rounded-lg z-10">
            <a href="">
              <img className='w-[120px] md:w-[200px]' src={logo} alt="Logo" />
            </a>
            <a href="" className='text-white px-4 py-1 border-white rounded-md text-md border'>Linkedin</a>
          </div>

          <div className='w-full  px-5 md:px-10 pt-10 flex relative'>
            <div ref={sidebarRef}>
                <SideBar handler={handelSolutionIndex} linkColor={navColor} />
            </div>
            <Outlet />
          </div>
        </motion.div>
    
    </>
  );
};

export default Layout;
