import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PlaneIcon from '../assets/planning-icon.svg'


const SolutionCard = ({title}) => {

    const [animationKey, setAnimationKey] = useState(0);

  
    useEffect(() => {
        setAnimationKey((prevKey) => prevKey + 1);
    }, [title]);

    
  return (
    <div className=' w-4/5 mx-auto flex justify-between items-center'>


      <motion.div 
        className='flex-1 flex flex-col gap-5 items-start'
        key={`left${animationKey}`}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='w-2/3 mx-auto flex flex-col gap-5 items-start'>
          <img className='size-24' src={PlaneIcon} alt="" />
          <h2 className='text-[#2870AE] text-5xl font-bold'>{title}</h2>
          <p className='text-[#2870AE] text-base'>Efficient planning is the cornerstone of successful wholesale roaming financial management. NeuString Analytics provides the tools to streamline your planning process and set the stage for optimal performance.</p>
        </div>

      </motion.div>

      <motion.div 
        className='w-[200px] h-full space-y-5'
        key={`center${animationKey}`}
        initial={{ opacity: 0, y: 600 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >
          <div className='relative w-[120px] h-[120px] mx-auto'>
            <div className="w-[120px] h-[120px] border-[20px] border-[#44A8FF] rounded-full relative">
    
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#2870AE] text-3xl font-bold bg-white py-2 px-4 rounded-md'>
              Planning
            </div>
          </div>

          <div
              className="w-[6px] h-full mx-auto"
              style={{
                background: 'linear-gradient(180deg, #7F7FD5 0%, rgba(134, 168, 231, 0.5) 50%, rgba(145, 234, 228, 0) 100%)'
              }}
            ></div>
      </motion.div>

      <motion.div 
        className='flex-1'
        key={`right${animationKey}`}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='relative w-full h-full'>
            <div className='flex justify-center items-center w-full h-full'>
            <svg width="428" height="405" viewBox="0 0 428 405" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M340.853 60.1307C309.593 -1.68739 231.198 15.0748 205.839 34.2379C130.812 -27.4399 75.7613 8.68238 37.9059 38.2304C0.0504487 67.7784 -8.82117 132.303 10.9015 162.223C57.6843 233.193 67.4149 224.148 18.6698 260.616C-30.0754 297.084 66.3869 469.24 197.331 378.614C282.974 319.341 353.874 375.78 384.871 330.897C415.868 286.015 455.276 138.452 399.296 135.59C343.317 132.728 379.927 137.403 340.853 60.1307Z" fill="url(#paint0_linear_1_3186)" />
              <defs>
                <linearGradient id="paint0_linear_1_3186" x1="-0.0230699" y1="89.2883" x2="384.668" y2="331.382" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#7F7FD5" />
                  <stop offset="0.5" stop-color="#86A8E7" />
                  <stop offset="1" stop-color="#91EAE4" />
                </linearGradient>
              </defs>
            </svg>
            </div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col p-10 justify-between "
              style={{ width: '428px', height: '405px' }}
            >
              <div 
                className="text-white px-3 py-1 rounded-md text-3xl self-start" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Forecasting
              </div>
              <div 
                className="text-white px-3 py-1 rounded-md text-3xl self-end" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Financial Targets
              </div>
              <div 
                className="text-white px-3 py-1 rounded-md text-3xl self-start" 
                style={{ 
                  background: 'linear-gradient(108.46deg, rgba(21, 108, 221, 0.264) 0%, rgba(21, 108, 221, 0.132) 100%)' 
                }}
              >
                Business Case
              </div>
          
            </div>
        </div>
        
      </motion.div>


    </div>
  )
}

export default SolutionCard
