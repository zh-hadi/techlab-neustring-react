
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

import { useDataContext } from '../contexts/DataContext';

import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';



// const pageVariants = {
//   initial: { y: 1000, opacity: 0 },
//   animate: { y: [1000, -30, 0], opacity: 1 },
//   exit: { y: 1000, opacity: 0 },
// };

// const pageVariants = {
//   initial: { y: 1000, opacity: 0 },
//   animate: { 
//     y: [1000, -200, 0, -100, 0],  // Shake effect (up, down, back to center)
//     opacity: 1,
//     transition: {
//       y: {
//         type: "spring",
//         stiffness: 150,  // Higher stiffness for more bouncy shake
//         damping: 25,     // Controls how quickly it slows down
//         duration: 1.2,   // Duration for the movement (shake)
//       },
//       opacity: {
//         ease: "easeInOut", 
//         duration: 0.8,
//       },
//     },
//   },
//   exit: { 
//     y: 1000, 
//     opacity: 0, 
//     transition: {
//       y: {
//         type: "spring",
//         stiffness: 150,
//         damping: 25,
//         duration: 0.8,
//       },
//       opacity: {
//         ease: "easeInOut",
//         duration: 0.6,
//       },
//     },
//   },
// };


const pageVariants = {
  initial: { y: 1000, opacity: 0 },
  animate: {
    y: [1000, -20, 0],  // Shake effect (up, down, back to center)
    opacity: 1,
    transition: {
      y: {
        times: [0, 0.8, 1],
        duration: 2.2,  
        ease: "easeInOut", 
      },
      opacity: {
        ease: "easeInOut", // Smooth fade-in effect
        duration: 0.8,     // Duration of opacity transition
      },
    },
  },
  exit: { 
    y: 1000, 
    opacity: 0,
    transition: {
      y: {
        ease: "easeInOut",  // Smooth exit movement
        duration: 1.2,      // Duration of movement for exit
      },
      opacity: {
        ease: "easeInOut",  // Smooth fade-out effect
        duration: 0.6,      // Duration of opacity transition for exit
      },
    },
  },
};


// second layer motion 
const pageVariants2 = {
  initial: { opacity: 0 }, // Start with opacity 0
  animate: { 
    opacity: 1, // Fade in to opacity 1
    transition: {
      opacity: {
        ease: "easeInOut", // Smooth transition easing
        duration: 2,        // Duration of 1 second for opacity
      },
    },
  },
  exit: { 
    opacity: 0, // Fade out to opacity 0
    transition: {
      opacity: {
        ease: "easeInOut", // Smooth transition easing for exit
        duration: 2,        // Duration of 1 second for opacity
      },
    },
  },
};

const Layout = () => {

  const exampleUrl = '#';

  const apidata = useDataContext();
    
  const urlData = apidata?.apiData?.data?.linkdinUrl || exampleUrl



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

    // const handleScreenClick = (e) => {
    //   console.log(e);
    //   if (sidebarRef.current && sidebarRef.current.contains(e.target)) {
    //     console.log('side bar clicked'+ sidebarRef.current)
    //     return; // Prevent navigation if the click is inside the sidebar
    //   }
    //   if(location.pathname === '/solution' && solIndex.solutionIndex < 6) {
    //     console.log(solIndex.solutionIndex);
    //     solIndex.setSolutionIndex(solIndex.solutionIndex + 1)
    //     exit()
    //   }else{

    //     solIndex.setSolutionIndex(0)
    //     const currentIndex = routes.findIndex((route) => route === location.pathname);
    //     const nextIndex = (currentIndex + 1) % routes.length; 
    //     navigate(routes[nextIndex]);
    //   }
    // };

    const sidebarRef = useRef(null);



    // const handleWheel = (event) => {
    //   const { deltaY } = event; // Get the vertical scroll amount
    //   const container = document.querySelector(".content-container"); // Adjust this selector to your scrolling container
    //   const containerHeight = container.offsetHeight; // Height of the container
    //   const contentHeight = container.scrollHeight; // Total scrollable height
    //   const scrollTop = container.scrollTop; // Current scroll position
    
    //   const isAtBottom = scrollTop + containerHeight >= contentHeight - 1; // Check if at the bottom
    //   const isAtTop = scrollTop === 0; // Check if at the top
    
    //   if (deltaY > 0 && isAtBottom) {
    //     // Scrolling down and at the bottom of the container
    //     if (location.pathname === '/solution' && solIndex.solutionIndex < 6) {
    //       solIndex.setSolutionIndex(solIndex.solutionIndex + 1); // Increment solution index
    //     } else {
    //       solIndex.setSolutionIndex(0); // Reset solution index
    //       const currentIndex = routes.findIndex((route) => route === location.pathname);
    //       const nextIndex = (currentIndex + 1) % routes.length; // Move to the next route
    //       navigate(routes[nextIndex]);
    //     }
    //   } else if (deltaY < 0 && isAtTop) {
    //     // Scrolling up and at the top of the container
    //     if (location.pathname === '/solution' && solIndex.solutionIndex > 0) {
    //       solIndex.setSolutionIndex(solIndex.solutionIndex - 1); // Decrement solution index
    //     } else {
    //       const currentIndex = routes.findIndex((route) => route === location.pathname);
    //       const prevIndex = (currentIndex - 1 + routes.length) % routes.length; // Move to the previous route
    //       navigate(routes[prevIndex]);
    //     }
    //   }
    // };
    
    
    let isNavigatingInProgress = false; // Flag to track whether navigation is in progress
let isHandlingScroll = false; // To prevent multiple scrolls triggering in quick succession

const handleWheel = (event) => {
  // Prevent further actions if navigation is in progress
  if (isNavigatingInProgress || isHandlingScroll) return;

  const { deltaY } = event; // Get the vertical scroll amount
  const container = document.querySelector(".content-container"); // Your container
  const containerHeight = container.offsetHeight; // Height of the container
  const contentHeight = container.scrollHeight; // Total scrollable height
  const scrollTop = container.scrollTop; // Current scroll position

  const isAtBottom = scrollTop + containerHeight >= contentHeight - 1; // Check if at the bottom
  const isAtTop = scrollTop === 0; // Check if at the top

  // Debounce the scroll event for smoother transitions
  isHandlingScroll = true;

  if (deltaY > 0 && isAtBottom) {
    // Scrolling down and at the bottom of the container
    if (location.pathname === '/solution' && solIndex.solutionIndex < 6) {
      solIndex.setSolutionIndex(solIndex.solutionIndex + 1); // Increment solution index
    } else {
      // Set navigation flag to prevent multiple navigations at the same time
      isNavigatingInProgress = true;
      solIndex.setSolutionIndex(0); // Reset solution index
      const currentIndex = routes.findIndex((route) => route === location.pathname);
      const nextIndex = (currentIndex + 1) % routes.length; // Move to the next route
      navigate(routes[nextIndex]);

      // Reset navigation flag after a short delay (500ms)
      setTimeout(() => {
        isNavigatingInProgress = false;
      }, 500); // Adjust this delay to control navigation speed
    }
  } else if (deltaY < 0 && isAtTop) {
    // Scrolling up and at the top of the container
    if (location.pathname === '/solution' && solIndex.solutionIndex > 0) {
      solIndex.setSolutionIndex(solIndex.solutionIndex - 1); // Decrement solution index
    } else {
      // Set navigation flag to prevent multiple navigations at the same time
      isNavigatingInProgress = true;

      const currentIndex = routes.findIndex((route) => route === location.pathname);
      const prevIndex = (currentIndex - 1 + routes.length) % routes.length; // Move to the previous route
      navigate(routes[prevIndex]);

      // Reset navigation flag after a short delay (500ms)
      setTimeout(() => {
        isNavigatingInProgress = false;
      }, 500); // Adjust this delay based on your transition time
    }
  }

  // Reset handling scroll state after a short timeout (debounce for smoother scrolling)
  setTimeout(() => {
    isHandlingScroll = false;
  }, 150); // Adjust this timeout value to match your preferred smoothness
};

    






    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);
    
    const handleTouchStart = (event) => {
      setTouchStartY(event.touches[0].clientY); // Capture the starting point of the touch
    };
    
    
    // const handleTouchEnd = (event) => {
    //   const touchEndY = event.changedTouches[0].clientY; // Capture touch end position
    //   const deltaY = touchStartY - touchEndY; // Calculate swipe distance
    
    //   // Ignore taps (if touch start & end positions are nearly the same)
    //   if (Math.abs(deltaY) < 50) return;
    
    //   console.log("DeltaY:", deltaY);
    
    //   const container = document.querySelector(".content-container"); // Adjust selector if needed
    //   if (!container) return; // Prevent errors if container is missing
    
    //   const containerHeight = container.offsetHeight;
    //   const contentHeight = container.scrollHeight;
    //   const scrollTop = container.scrollTop;
    
    //   console.log("Container height:", containerHeight);
    //   console.log("Content height:", contentHeight);
    //   console.log("Scroll position:", scrollTop);
    
    //   const isAtBottom = scrollTop + containerHeight >= contentHeight;
    //   const isAtTop = scrollTop === 0;
    
    //   // Handle swipe gestures, NOT taps
    //   if (deltaY > 50 && isAtBottom) {
    //     // Swipe up at bottom
    //     if (location.pathname === "/solution" && solIndex.solutionIndex < 6) {
    //       solIndex.setSolutionIndex(solIndex.solutionIndex + 1);
    //     } else {
    //       solIndex.setSolutionIndex(0);
    //       const currentIndex = routes.findIndex((route) => route === location.pathname);
    //       const nextIndex = (currentIndex + 1) % routes.length;
    //       navigate(routes[nextIndex]);
    //     }
    //   } else if (deltaY < -50 && isAtTop) {
    //     // Swipe down at top
    //     if (solIndex.solutionIndex > 0) {
    //       solIndex.setSolutionIndex(solIndex.solutionIndex - 1);
    //     } else {
    //       const currentIndex = routes.findIndex((route) => route === location.pathname);
    //       const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
    //       navigate(routes[prevIndex]);
    //     }
    //   }
    // };
    
    let isNavigating = false; // Add a flag to track navigation state

const handleTouchEnd = (event) => {
  // Prevent navigation if it's already in progress
  if (isNavigating) return;

  const touchEndY = event.changedTouches[0].clientY; // Capture touch end position
  const deltaY = touchStartY - touchEndY; // Calculate swipe distance
  
  // Ignore taps (if touch start & end positions are nearly the same)
  if (Math.abs(deltaY) < 50) return;

  console.log("DeltaY:", deltaY);

  const container = document.querySelector(".content-container"); // Adjust selector if needed
  if (!container) return; // Prevent errors if container is missing

  const containerHeight = container.offsetHeight;
  const contentHeight = container.scrollHeight;
  const scrollTop = container.scrollTop;

  console.log("Container height:", containerHeight);
  console.log("Content height:", contentHeight);
  console.log("Scroll position:", scrollTop);

  const isAtBottom = scrollTop + containerHeight >= contentHeight;
  const isAtTop = scrollTop === 0;

  // Handle swipe gestures, NOT taps
  if (deltaY > 50 && isAtBottom) {
    // Swipe up at bottom
    if (location.pathname === "/solution" && solIndex.solutionIndex < 6) {
      solIndex.setSolutionIndex(solIndex.solutionIndex + 1);
    } else {
      // Set navigation flag to prevent multiple navigations at the same time
      isNavigating = true;
      solIndex.setSolutionIndex(0);
      const currentIndex = routes.findIndex((route) => route === location.pathname);
      const nextIndex = (currentIndex + 1) % routes.length;
      navigate(routes[nextIndex]);

      // Reset navigation flag after navigation (you can improve this based on your actual navigation completion)
      setTimeout(() => {
        isNavigating = false;
      }, 500); // Adjust this delay to match your navigation transition time
    }
  } else if (deltaY < -50 && isAtTop) {
    // Swipe down at top
    if (solIndex.solutionIndex > 0) {
      solIndex.setSolutionIndex(solIndex.solutionIndex - 1);
    } else {
      // Set navigation flag to prevent multiple navigations at the same time
      isNavigating = true;
      const currentIndex = routes.findIndex((route) => route === location.pathname);
      const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
      navigate(routes[prevIndex]);

      // Reset navigation flag after navigation (you can improve this based on your actual navigation completion)
      setTimeout(() => {
        isNavigating = false;
      }, 500); // Adjust this delay to match your navigation transition time
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
    let headerColor = pageColor.find(item => item.page === location.pathname.substring(1))?.headerColor;
    let headerButton = pageColor.find(item => item.page === location.pathname.substring(1))?.headerButton;

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
        headerColor = solutionPage.pages[solIndex.solutionIndex].headerColor;
        headerButton = solutionPage.pages[solIndex.solutionIndex].headerButton;
       
      } else {
        console.log('Solution page is not found');
      }
    }else{
      solIndex.setSolutionIndex(0)
    }


    const [isVideoLoaded, setIsVideoLoaded] = useState(true);

    const handleVideoLoaded = () => {
      setIsVideoLoaded(true); // Video has loaded enough to play
    };


    
  return (
    <>
 
 {
  isVideoBackground && location.pathname === '/home' ? (
    <div className="h-screen w-full z-50 ">
      <div className="relative h-screen w-full">
        { isVideoLoaded && (
          <video
            autoPlay
            loop
            muted
            className="video-bg h-screen w-full object-cover"
            onCanPlayThrough={handleVideoLoaded} // Trigger when the video can play through
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0E2C4699]"></div>
        <img className="absolute bottom-5 right-5" src={NeuStringSideLogo} alt="" />
      </div>
    </div>
  ) : (
    <div className="h-screen w-full z-50 " style={{ background: bgColor}}>
      
    </div>
  )
}

          
        <motion.div
          // onClick={handleScreenClick}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd} 
          className={`${
            color[color.length - 1] === 'class' ? color[0] : ''
          }   flex flex-col px-3 md:px-10 pt-5 absolute top-0 left-0 right-0  bottom-0 z-0 `}
          // style={color[color.length - 1] === 'style' ? { background: homeColor } : backgroundStyle}
          style={{ background: bgColor}}

          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 1, ease: "easeInOut" }}

        >
          <div className="sticky px-5 py-2 bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] w-full md:w-3/5 mx-auto flex items-center justify-between rounded-lg z-[1000]">
            <a href="/">
              <img className='w-[120px] md:w-[200px]' src={logo} alt="Logo" />
            </a>
            <a href={urlData} target="_blank" style={{ color: headerButton, border: `1px solid ${headerButton}`}}  className={` px-4 py-1  rounded-md text-md  font-semibold`}>Linkedin</a>
          

           <MobileMenu />

            

          </div>

          <motion.div 
            className='w-full  px-5 md:px-10 pt-10 flex relative content-container z-5'
            // variants={pageVariants2} // Link the pageVariants to this motion.div
            // initial="initial"
            // animate="animate"
            // exit="exit"

          >
            <div ref={sidebarRef}>
                <SideBar handler={handelSolutionIndex} linkColor={navColor} />
            </div>
            

              <Outlet />
       
          </motion.div>
        </motion.div>
    
    </>
  );
};

export default Layout;
