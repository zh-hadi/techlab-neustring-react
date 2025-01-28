import React from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useContext, useEffect } from 'react'
import { ColorContext } from '../App'
import { useLocation } from 'react-router-dom'
import companyLogo from '../assets/company-logo.svg'
import SunImage from '../assets/sun.svg'
import TreeImage from '../assets/tree.svg'
import LocationIcon from '../assets/location-icon.svg'
import CommunityImage from '../assets/community-image.png'
import TeamMemberImage from '../assets/team-member.png'
import CommunityThemeLogoImage from '../assets/community-theme-logo.png'
import SunIcon from '../assets/sun-icon.svg'
import SpotlightCard from '../components/CommunitySpotlight'

import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/style/swipercss.css';


const CommunityPage = () => {

  const { setColor } = useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {

    setColor(['#F5F5F7', 'style']);

  }, [setColor, location])



  return (
    <>

<div className='pb-[200px]'>

      <motion.div 
           className="grid grid-cols-2 gap-10 w-4/6 mx-auto "
           style={{
             scrollbarWidth: "none",
             msOverflowStyle: "none", // Disable scrollbar in IE
           }}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className='col-span-2 flex flex-col  items-center'>
          <div className='flex gap-2 items-center'>
            <img src={companyLogo} alt="" />
            <span className='text-6xl font-bold'>Community Hub</span>
          </div>
          <div className='text-transparent bg-clip-text bg-communtiy-head text-6xl font-bold'>Connect, Share, Grow</div>
        </div>
        <div className="h-[572px] relative bg-[#2997FF] rounded-3xl p-10 flex flex-col justify-between">

          <div className='flex gap-3 text-white'>
            <img src={LocationIcon} alt="" />
            <h2>WAS# in Bali is here</h2>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-6xl text-white'>The countdown begins!</h2>
            <p className='text-xl text-white'>Raj P., Eva Heinze Gildum, and Subra Mishra from Yaana team are excited to be there and showcase NeuString Analytics business-driven autonomy concept.</p>
            <a href="" className='text-2xl bg-white bg-opacity-20 text-white rounded-3xl px-3 py-2 self-start'>Book a Demo</a>
          </div>

          {/* background image */}
          <img src={SunImage} alt="" className='absolute top-10 right-5' />
          <img src={TreeImage} alt="" className='absolute bottom-0 left-1/2 -translate-x-1/2' />
        </div>



        <div className="bg-white flex flex-col rounded-3xl p-5 gap-5">
          <div className='flex flex-col gap-3'>
            <div className='bg-[#77719f] rounded-3xl'>
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
        <div className="  bg-communtiy-head rounded-3xl col-span-2">

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className='p-1 relative rounded-3xl'>
              <img className='w-full rounded-3xl' src={TeamMemberImage} alt="" />
              <h2 className='p-4 absolute bottom-10 left-10 text-white bg-gray-gradient text-4xl font-medium rounded-xl bg-opacity-50'>Guess who didnt had morning coffee ?</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-1 relative rounded-3xl'>
              <img className='w-full rounded-3xl' src={TeamMemberImage} alt="" />
              <h2 className='p-4 absolute bottom-10 left-10 text-white bg-gray-gradient text-4xl font-medium rounded-xl bg-opacity-50'>Guess who didnt had morning coffee ?</h2>
            </div>
          </SwiperSlide>
          
          </Swiper>
        </div>

        <SpotlightCard />

        <div className="bg-gray-500 rounded-3xl col-span-2">
            <div className='relative'>
              <div className='bg-green-gradient rounded-3xl h-[500px] w-full z-50 p-1'>
                  <div className=' bg-[#D9D9D9] h-full w-full rounded-3xl'>

                  <div><h2 className='text-red-500 font-bold'>Community Spotlight</h2></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae modi neque voluptate dolore nam explicabo molestias alias nobis tempore odit temporibus at repudiandae est, minima ipsam. Libero sapiente est possimus quaerat quas odio recusandae eligendi fuga minus consequuntur, magnam placeat dicta vitae dignissimos laudantium suscipit! Et, veniam aperiam numquam iusto labore voluptas odit quod provident? Asperiores consequuntur nobis et vitae dolorem vero autem ea corrupti sunt sit error, sed quam dolores inventore similique earum facilis ipsa, consequatur sapiente ab cum ducimus facere nemo. Accusamus consectetur alias aliquid suscipit id, labore autem tenetur reiciendis accusantium dolores culpa aut rerum nulla! Consequuntur nisi consectetur suscipit ex, assumenda consequatur exercitationem atque, provident maxime dignissimos quis hic aliquid est repudiandae magnam beatae veritatis minus nostrum ad optio ipsa ducimus sint impedit illum! Doloremque dolor molestiae commodi officiis quasi accusamus veniam unde vel in at eos asperiores, accusantium veritatis esse iure. Ipsa, necessitatibus nesciunt.</p>
            <div className='h-[150px] w-[400px] bg-white absolute top-0 left-0 border-r-2 border-b-2 rounded-br-xl border-green-500 '>
              sdfasdfa
            </div>
                  </div>
              </div>
            </div>
        </div>
      

      </motion.div>
</div>

    </>

  )
}

export default CommunityPage
