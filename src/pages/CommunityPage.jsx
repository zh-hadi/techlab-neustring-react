import React from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useContext, useEffect, useState } from 'react'
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

import { useDataContext } from '../contexts/DataContext'

import 'swiper/css';
import 'swiper/css/navigation';
import '../assets/style/swipercss.css';
import Card1 from '../components/card/Card1';
import Card2 from '../components/card/Card2';
import Card3 from '../components/card/Card3';


const CommunityPage = () => {

  const staticData = { 
    book: {
      title: 'The countdown begins!',
      description: 'Raj P., Eva Heinze Gildum, and Subra Mishra from Yaana team are excited to be there and showcase NeuString Analytics business-driven autonomy concept.',
      location: 'WAS# in Bali is here',
      url: '#'
    },
    post: {
      title: 'Celebrating Innovation and Industry Insights with',
      description: 'Eva delves into the exciting world of telecommunications, sharing insights on NeuString Co-Pilot: Our award wining project   Autonomy ...     Read More',
      image: CommunityImage,
      date: 'Published 12 November, 2024',
      author: 'Eva Heinze Gildum'
    },
    slider: [
      {
        title: 'Guess who didnt had morning coffee ?',
        image: TeamMemberImage,
      },
      {
        title: 'Guess who didnt had morning coffee ?',
        image: TeamMemberImage,
      }
    ],
    card: {
      title: 'Community Spotlight',
      image: CommunityImage,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, diam sit amet ullamcorper posuere, velit urna scelerisque velit, ac viverra erat neque vel neque. ',
      author: 'Eva Heinze Gildum',
    }
  }

  const { setColor } = useContext(ColorContext)
  const location = useLocation();

  useEffect(() => {

    setColor(['#F5F5F7', 'style']);

  }, [setColor, location])




  const apidata = useDataContext();
  // const data = apidata?.apiData?.data?.comminutePage ?? staticData
  const data =  staticData
  // console.log(apidata.apiData.data.comminutePage);

  // State for handling "Read More" functionality
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Conditionally shorten description to 30 characters or show full text
  const shortenedDescription =
    data.post.description.length > 120
      ? data.post.description.substring(0, 120) + '...'
      : data.post.description;


  return (
    <>

<div className='mb-[300px] w-full'>

      <motion.div 
           className=" flex flex-col  md:grid   md:grid-cols-2 gap-10 w-full md:w-4/6 mb-[100px] mx-auto "
           style={{
             scrollbarWidth: "none",
             msOverflowStyle: "none", // Disable scrollbar in IE
           }}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className='col-span-2 flex flex-col  items-center'>
          <div className='flex flex-col md:flex-row gap-2 items-center'>
            <img src={companyLogo} alt="" />
            <span className='text-2xl md:text-6xl font-bold'>Community Hub</span>
          </div>
          <div className='text-transparent bg-clip-text bg-communtiy-head text-3xl md:text-6xl font-bold text-center'>Connect, Share, Grow</div>
        </div>


        <Card1 />
        <Card2 />
        <Card3 />


        <div className="h-[572px] w-full relative bg-[#2997FF] rounded-3xl p-10 flex flex-col justify-between">

          <div className='flex gap-3 text-white'>
            <img src={LocationIcon} alt="" />
            <h2>{data.book.location}</h2>
          </div>

          <div className='flex flex-col gap-3'>
            <h2 className='font-bold text-3xl md:text-6xl text-white'>{data.book.title}</h2>
            <p className='text-sm md:text-lg text-white'>
              
              {data.book.description}
            </p>
            <a href={data.book.url} className='text-sm   bg-white bg-opacity-20 text-white rounded-lg px-3 py-2 self-start'>Book a Demo</a>
          </div>

          {/* background image */}
          <img src={SunImage} alt="" className='absolute top-10 right-5' />
          <img src={TreeImage} alt="" className='absolute bottom-0 left-1/2 -translate-x-1/2' />
        </div>



        <div className="bg-white flex flex-col rounded-3xl p-5 gap-5">
          <div className='flex flex-col gap-3'>
            <div className='bg-[#77719f] rounded-3xl'>
              <img className='rounded-xl cover' src={data.post.image} alt="" />
            </div>
            <div className='text-[#9C9C9C] text-sm'>
              {data.post.date}
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-medium text-slate-800'>{data.post.title} <span className='bg-green-gradient bg-clip-text text-transparent'>{data.post.author}</span> </h2>
            <p className=" text-[#0E2C46]">
                {isExpanded ? data.book.description : shortenedDescription}
              
              {data.book.description.length > 120 && (
                <a
                  onClick={handleToggleDescription}
                  className="text-sm text-blue-400 "
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </a>

            )}
            </p>
            {/* <p className="text-[#0E2C46]">{data.post.description }</p> */}
          </div>
        </div>

        {/* <SpotlightCard /> */}

        <div className='bg-white p-3  md:p-10 rounded-xl col-span-2'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex flex-col w-full md:min-w-[300px]'>
              <div>
                <div className="flex items-center gap-3 mb-3">

                    <img src={SunIcon} alt="" />
                    <h2 className="bg-green-gradient bg-clip-text text-transparent">Community Spotlight</h2>

                    </div>
                    <div className="text-[#0E2C46] text-3xl mb-4 font-semibold">Orange telecom</div>
                </div>
              <div className=' md:border-l md:border-t  md:border-b  p-3 border-[#82BC34] bg-community-card md:rounded-l-xl rounded-t-xl md:rounded-tr-none'>
                <img src={CommunityThemeLogoImage} alt="" />
              </div>
            </div>
            <div className='md:border rounded-b-lg md:rounded-bl-none md:border-[#82BC34] bg-community-card p-4 flex flex-col gap-4 md:rounded-r-xl md:rounded-tl-xl'>
              <h3 className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, blanditiis!</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus reprehenderit eius excepturi laudantium ea in repellat ipsum sed eveniet.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque necessitatibus reprehenderit eius excepturi laudantium ea in repellat ipsum sed eveniet.</p>

              <div>Lorem, ipsum dolor.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-communtiy-head rounded-3xl col-span-2">

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.slider.map((item, index) => (
            <SwiperSlide key={index}>
               <div className='p-[2px] relative rounded-3xl'>
                  <img className='w-full  rounded-3xl' src={item.image} alt="" />
                  <h2 className='p-1 md:p-4 absolute  bottom-1 md:bottom-10 left-1 md:left-10 text-white bg-gray-gradient text-sm md:text-4xl font-medium  rounded-xl bg-opacity-50'>{ item.title} </h2>
                </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div className='p-1 relative rounded-3xl'>
              <img className='w-full rounded-3xl' src={TeamMemberImage} alt="" />
              <h2 className='p-4 absolute bottom-10 left-10 text-white bg-gray-gradient text-4xl font-medium rounded-xl bg-opacity-50'>Guess who didnt had morning coffee ?</h2>
            </div>
          </SwiperSlide> */}
          
          </Swiper>
        </div>


        
      
      </motion.div>
</div>

    </>

  )
}

export default CommunityPage
