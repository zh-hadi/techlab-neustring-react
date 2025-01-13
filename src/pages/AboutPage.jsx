import React, { useContext, useEffect } from 'react'
import { ColorContext } from '../App'
import HeroImage from '../assets/about-page-phone.png'
import activeIcon from '../assets/icon-active.svg'
import { useLocation } from 'react-router-dom'



const AboutPage = () => {
  const {setColor} = useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {

    setColor(['linear-gradient(to right, #f3eee8 50%, #cbd7fd 50%)', 'style']);

  }, [setColor, location])

  return (
    <div className='w-full flex justify-evenly p-10'>
     


      <div className='flex-1 flex items-center justify-center'>
        <img src={HeroImage} alt="" />
      </div>
      <div className='items-center flex-1 ml-20'>
        <div className="flex flex-col text-left gap-5 w-4/5">
          <h2 className='text-[54px] font-bold text-[#0E2C46]'>Discover how NeuString revolutionizes wholesale roaming. </h2>
          <p className='text-[#0E2C46] text-xl'>Since our inception, NeuString has empowered leading mobile operators across the globe, achieving:</p>
          <div className='flex flex-col gap-4 text-xl font-semibold '>
            <div className='flex gap-2'>
              <img src={activeIcon} alt="" />
              <p className='text-[#12141D]'>Real-time insights with CO-Pilot that drive informed decisions</p>
            </div>
            <div className='flex gap-2'>
              <img src={activeIcon} alt="" />
              <p>Automated workflows that boost efficiency</p>
            </div>
            <div className='flex gap-2'>
              <img src={activeIcon} alt="" />
              <p>Intelligent Roaming Management with predictive insights and innovative tools.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutPage
