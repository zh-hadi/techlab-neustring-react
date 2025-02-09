import React, { useContext, useEffect, useState } from 'react'
import { ColorContext } from '../App'
import { motion } from 'framer-motion'
import HeroImage from '../assets/about-page-phone.png'
import activeIcon from '../assets/icon-active.svg'
import PlayButton from '../assets/Play.svg'
import { useLocation } from 'react-router-dom'

import { useDataContext } from '../contexts/DataContext'
import { useImages } from "../contexts/ImageContext";


const motionLeft = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 1],
    x: [-300, 20, 0], 
    transition: {
      duration: 1.2, 
      times: [0, 0.7, 1], 
      ease: "easeIn", 
    },
  },
};


const motionRight = {
  initial: {opacity: 0},
  animate: {
    opacity: [0, 1, 1],
    x: [300, -20, 0], 
    transition: {
      duration: 1.2, 
      times: [0, .7, 1],  
      ease: "easeIn", 
    },
  },
}





const AboutPage = () => {
  const Images = useImages();

  const staticData = {
    title: 'Discover how NeuString revolutionizes wholesale roaming. ',
    description: 'Since our inception, NeuString has empowered leading mobile operators across the globe, achieving:',
    image: Image.aboutPage,
    video: 'https://www.youtube.com/embed/DqR9K6-p07E',
    services: [ 
      'Real-time insights with CO-Pilot that drive informed decisions', 
      'Automated workflows that boost efficiency', 
      'Intelligent Roaming Management with predictive insights and innovative tools.', 
    ]
  }
  

  const [isLoaded, setIsLoaded] = useState(false);
  const {setColor} = useContext(ColorContext)
  const location = useLocation();


  const [isPageTransitionComplete, setIsPageTransitionComplete] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {

    // setColor(['linear-gradient(to right, #f3eee8 50%, #cbd7fd 50%)', 'style']);

  }, [setColor, location])



  // fetch data 
  const apidata = useDataContext();
  const data = apidata?.apiData?.data?.aboutPage ||  staticData;
 
  return (
    <motion.div className='w-full flex flex-col gap-5 md:flex-row justify-evenly  relative z-0 pb-10 mb:pb-0'>
     
      <motion.div 
        className='flex-1 flex items-center justify-center'

        initial='initial'
        animate='animate'
        variants={motionLeft}
      >
        <img className='h-full' src={Images.aboutPage} alt="" onLoad={() => setIsLoaded(true)}/>
      </motion.div>
      <motion.div 
        className='items-center flex-1 w-full md:w-3/5 flex justify-end'

        initial='initial'
        animate='animate'
      
        variants={motionRight}
      >
        <div className="flex flex-col text-left gap-5 w-full md:w-4/5">
          <h2 className='text-3xl md:text-6xl   font-bold text-[#0E2C46]'>{data.title} </h2>
          <p className='text-[#0E2C46] text-normal md:text-xl'>{data.description}</p>
          <div className='flex flex-col gap-4 text-sm md:text-xl font-semibold '>
            {data.services.map((item, index) => 

            (<div className='flex gap-2 items-start' key={index}>
              <img className='size-2 mt-2' src={activeIcon} alt="" />
              <p className='text-[#12141D]'>{item}</p>
            </div>)
            )}
            {/* <div className='flex gap-2 items-start'>
              <img className='size-2 mt-2' src={activeIcon} alt="" />
              <p>Automated workflows that boost efficiency</p>
            </div>
            <div className='flex gap-2 items-start'>
              <img className='size-2 mt-2' src={activeIcon} alt="" />
              <p>Intelligent Roaming Management with predictive insights and innovative tools.</p>
            </div> */}
          </div>
        </div>
      </motion.div>


      <motion.div
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        
      >
        <img src={PlayButton} alt="" />
      </motion.div>


    </motion.div>
  )
}

export default AboutPage
