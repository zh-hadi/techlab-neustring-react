import React from 'react'
import { useContext, useEffect } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'
import companyLogo from '../assets/company-logo.svg'
import SunImage from '../assets/sun.svg'
import TreeImage from '../assets/tree.svg'
import LocationIcon from '../assets/location-icon.svg'
import CommunityImage from '../assets/community-image.png'


const CommunityPage = () => {

  const {setColor} = useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {

    setColor(['#F5F5F7', 'style']);

  }, [setColor, location])

  

  return (
    <>

    <div className='grid grid-cols-2 gap-10 w-4/6  mx-auto'>
      <div className='col-span-2 flex flex-col  items-center'>
        <div className='flex gap-2 items-center'>
          <img src={companyLogo} alt="" />
          <span className='text-6xl font-bold'>Community Hub</span>
        </div>
        <div className='text-transparent bg-clip-text bg-communtiy-head text-6xl font-bold'>Connect, Share, Grow</div>
      </div>
  <div className="h-[572px] relative bg-[#2997FF] rounded-md p-10 flex flex-col justify-between">
    
    <div className='flex gap-3 text-white'>
       <img src={LocationIcon} alt="" />
       <h2>WAS# in Bali is here</h2>
    </div>

    <div className='flex flex-col gap-3'>
      <h2 className='font-bold text-6xl text-white'>The countdown begins!</h2>
      <p className='text-xl text-white'>Raj P., Eva Heinze Gildum, and Subra Mishra from Yaana team are excited to be there and showcase NeuString Analytics business-driven autonomy concept.</p>
      <a href="" className='text-2xl bg-white bg-opacity-20 text-white rounded-lg px-3 py-2 self-start'>Book a Demo</a>
    </div>

    {/* background image */}
    <img src={SunImage} alt="" className='absolute top-10 right-5'/>
    <img src={TreeImage} alt="" className='absolute bottom-0 left-1/2 -translate-x-1/2'/>
  </div>



  <div className="bg-white flex flex-col rounded-lg p-5 gap-5">
    <div className='flex flex-col gap-3'>
      <div className='bg-[#77719f] rounded-lg'>
        <img src={CommunityImage} alt="" />
      </div>
      <div className='text-[#9C9C9C] text-sm'>
        Published 12 November, 2024
      </div>
    </div>
    <div className='flex flex-col gap-3'>
      <h2 className='text-2xl font-medium text-slate-800'>Celebrating Innovation and Industry Insights with <span className='bg-green-gradient bg-clip-text text-transparent'>Eva Heinze Gildum</span> </h2>
      <p className="text-[#0E2C46]">Eva delves into the exciting world of telecommunications, sharing insights on NeuString Co-Pilot: Our award wining project   Autonomy ...     Read More</p>
    </div>
  </div>
  <div className="bg-green-500 flex justify-center items-center">
    hadi
  </div>
  <div className="bg-yellow-500 flex justify-center items-center">
    hadi
  </div>
  <div className="bg-purple-500 flex justify-center items-center">
    hadi
  </div>
  <div className="bg-gray-500 flex justify-center items-center">
    hadi
  </div>

    </div>
    </>

  )
}

export default CommunityPage
