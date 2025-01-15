import React from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import logo from '../assets/logo.png';
import SideBar from '../components/SideBar';
import { Outlet, useLocation } from 'react-router-dom';
import { ColorContext } from '../App';
import { useContext } from 'react';
import HeroImage from '../assets/hero2.png';
import HeroVideo from '../assets/hero-video.mp4';
import NeuStringSideLogo from '../assets/neu-string-side-logo.png';


const pageVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

const Layout = () => {
  const { color } = useContext(ColorContext);
  const location = useLocation();

  // Determine the background style conditionally
  const isVideoBackground = color[color.length - 1] === 'video';
  const backgroundStyle = isVideoBackground
    ? {}  // Empty if video background
    : { backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' };

  return (
    <>
      {/* Conditional video background rendering */}
      {isVideoBackground && (
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

      {/* Main container with dynamic background */}
      <AnimatePresence mode="wait">
        <motion.div
          className={`${
            color[color.length - 1] === 'class' ? color[0] : ''
          }  h-screen w-full flex flex-col px-10 pt-5 absolute top-0 left-0 z-0`}
          style={color[color.length - 1] === 'style' ? { background: color[0] } : backgroundStyle}

          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}

        >
          <div className="px-5 py-2 bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.2)] w-3/5 mx-auto flex items-center justify-between rounded-lg">
            <a href="">
              <img className='w-[200px]' src={logo} alt="Logo" />
            </a>
            <a href="" className='text-white px-4 py-1 border-white rounded-md text-md border'>Linkedin</a>
          </div>

          <div className='w-full h-full px-10 pt-10 flex relative'>
            <SideBar />
            <Outlet />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
