import React, { useContext, useEffect } from 'react';
import mouseIcon from '../assets/mouse-icon.svg';
import { ColorContext } from '../App';
import { useLocation } from 'react-router-dom';



const HomePage = () => {
  

  const { color, setColor } = useContext(ColorContext);
  const location = useLocation();
  

  useEffect(() => {

    
    setColor( ['red', 'video']);  

  }, [setColor, location]);


  return (
    <div className='w-full flex  flex-col justify-between items-center ' id='home-page'>
      <div className='flex flex-col justify-center items-center w-3/5 gap-5 flex-1'>
            <h1 className='text-[68px] font-bold text-white text-center'>Transforming Telecom Analytics with NeuString</h1>
            <p className='text-white opacity-50 text-center text-base'>Experience the future of telecom with NeuString. Harness the power of Co-Pilot Intelligence to automate tasks, QuickSight Insights to visualize critical data, and Secure Collaboration to empower teams.</p>
            <a href="" className='border border-[#82BC34] rounded-2xl px-5 py-2 text-white'>Learn more</a>
      </div>

      <div className='flex flex-col items-center'>
            <img src={mouseIcon} alt="" />
            <div className='text-white'>Scroll to view more</div>
      </div>

    </div>
  )
}

export default HomePage
